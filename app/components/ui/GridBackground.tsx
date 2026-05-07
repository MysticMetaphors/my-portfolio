type BaseLineProps = {
  duration: string;
  height?: string 
  delay: string;
  width?: string;
  opacity: number;
};

type HorizontalLine = BaseLineProps & {
  top: string;
  left?: never;
};

type VerticalLine = BaseLineProps & {
  left: string;
  top?: never;
};

type GridBgType = {
  color: string,
  height: string,
  horizontal_lines?: HorizontalLine[]
  vertical_line?: VerticalLine[]
}

export default function GridBg({ color, height, horizontal_lines, vertical_line }: GridBgType) {
  return (
    < div className="absolute top-0 left-0 w-full pointer-events-none z-[1] overflow-hidden"
      style={{ height: height }
      }
    >
      {/* Grid */}
      < div className="absolute inset-0"
        style={{
          backgroundImage: `
        linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
      `,
          backgroundSize: '60px 60px',
          backgroundColor: '#0a0f14',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, transparent 100%)',
        }}
      />

      {/* Horizontal moving lines */}
      {horizontal_lines && (
        horizontal_lines.map((line, i) => (
          <div
            key={i}
            className="absolute left-0"
            style={{
              top: line.top,
              width: line.width,
              height: '1px',
              opacity: line.opacity,
              background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
              animation: `moveRight ${line.duration} ${line.delay} infinite linear`,
            }}
          />
        ))
      )}

      {/* Vertical moving lines */}
      {vertical_line && (
        vertical_line.map((line, i) => (
          <div
            key={i}
            className="absolute top-0"
            style={{
              left: line.left,
              height: line.height,
              width: '1px',
              opacity: line.opacity,
              background: `linear-gradient(180deg, transparent, ${color}, transparent)`,
              animation: `moveDown ${line.duration} ${line.delay} infinite linear`,
            }}
          />
        ))
      )}

      <style>{`
    @keyframes moveRight {
      from { transform: translateX(-160px); }
      to   { transform: translateX(100vw);  }
    }
    @keyframes moveDown {
      from { transform: translateY(-140px); }
      to   { transform: translateY(80vh);   }
    }
  `}</style>
    </div >
  )
}