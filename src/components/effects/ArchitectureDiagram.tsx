'use client';

import { useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface DiagramNode {
  id: string;
  label: string;
  x: number;
  y: number;
  icon?: ReactNode;
  type: 'primary' | 'secondary' | 'tertiary';
}

interface DiagramConnection {
  from: string;
  to: string;
  animated?: boolean;
}

interface ArchitectureDiagramProps {
  nodes: DiagramNode[];
  connections: DiagramConnection[];
  title?: string;
  className?: string;
}

export function ArchitectureDiagram({
  nodes,
  connections,
  title,
  className,
}: ArchitectureDiagramProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  if (!nodes?.length || !connections?.length) return null;

  const getNodeById = (id: string) => nodes.find((n) => n.id === id);

  const isConnectedToHovered = (nodeId: string) => {
    if (!hoveredNode) return false;
    return connections.some(
      (c) =>
        (c.from === hoveredNode && c.to === nodeId) ||
        (c.to === hoveredNode && c.from === nodeId),
    );
  };

  const isConnectionHighlighted = (from: string, to: string) => {
    if (!hoveredNode) return false;
    return from === hoveredNode || to === hoveredNode;
  };

  const nodeColors = {
    primary: { fill: '#0A1628', stroke: '#0891B2' },
    secondary: { fill: '#1E3A5F', stroke: 'rgba(8, 145, 178, 0.6)' },
    tertiary: { fill: '#1E3A5F', stroke: 'rgba(74, 124, 89, 0.6)' },
  };

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      {title && (
        <div className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.1em] text-gray-400">
          {title}
        </div>
      )}
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-auto"
        role="img"
        aria-label={title || 'System architecture diagram'}
      >
        <defs>
          {/* Arrow marker */}
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
          >
            <path d="M 0 0 L 8 3 L 0 6 Z" fill="#0891B2" opacity="0.6" />
          </marker>
          {/* Glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Particle gradient */}
          <radialGradient id="particle-glow">
            <stop offset="0%" stopColor="#0891B2" stopOpacity="1" />
            <stop offset="100%" stopColor="#0891B2" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Connections */}
        {connections.map((conn, i) => {
          const fromNode = getNodeById(conn.from);
          const toNode = getNodeById(conn.to);
          if (!fromNode || !toNode) return null;

          const highlighted = isConnectionHighlighted(conn.from, conn.to);
          const pathLength = Math.sqrt(
            Math.pow(toNode.x - fromNode.x, 2) + Math.pow(toNode.y - fromNode.y, 2),
          );

          return (
            <g key={`${conn.from}-${conn.to}`}>
              {/* Connection line */}
              <line
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke={highlighted ? '#0891B2' : 'rgba(8, 145, 178, 0.2)'}
                strokeWidth={highlighted ? 2 : 1}
                strokeDasharray={pathLength}
                strokeDashoffset={isVisible ? 0 : pathLength}
                markerEnd="url(#arrowhead)"
                style={{
                  transition: `stroke-dashoffset 1.5s ease-out ${i * 0.2}s, stroke 0.3s, stroke-width 0.3s`,
                }}
              />

              {/* Animated data particle */}
              {isVisible && conn.animated !== false && (
                <circle r="3" fill="url(#particle-glow)" opacity={highlighted ? 0.9 : 0.4}>
                  <animateMotion
                    dur={`${2 + i * 0.5}s`}
                    repeatCount="indefinite"
                    path={`M${fromNode.x},${fromNode.y} L${toNode.x},${toNode.y}`}
                  />
                </circle>
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => {
          const isHovered = hoveredNode === node.id;
          const isConnected = isConnectedToHovered(node.id);
          const dimmed = hoveredNode && !isHovered && !isConnected;

          return (
            <g
              key={node.id}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              className="cursor-pointer"
              style={{
                opacity: isVisible ? (dimmed ? 0.3 : 1) : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0)',
                transformOrigin: `${node.x}px ${node.y}px`,
                transition: `opacity 0.6s ease-out ${0.5 + i * 0.15}s, transform 0.6s ease-out ${0.5 + i * 0.15}s`,
              }}
            >
              {/* Node glow on hover */}
              {isHovered && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="45"
                  fill="rgba(8, 145, 178, 0.08)"
                  filter="url(#glow)"
                />
              )}

              {/* Node box */}
              <rect
                x={node.x - 60}
                y={node.y - 18}
                width="120"
                height="36"
                rx="8"
                fill={nodeColors[node.type].fill}
                stroke={nodeColors[node.type].stroke}
                strokeWidth={isHovered ? 2 : 1}
                style={{ transition: 'stroke-width 0.2s' }}
              />

              {/* Node label */}
              <text
                x={node.x}
                y={node.y + 5}
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize="11"
                fontWeight="500"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
