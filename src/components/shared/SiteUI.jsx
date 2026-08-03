export function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </div>
  );
}

export function BrandLogo({ className = "", showTagline = true }) {
  return (
    <span className={`brand-logo ${className}`}>
      <svg
        className="brand-logo-mark"
        viewBox="0 0 48 48"
        aria-hidden="true"
      >
        <g fill="currentColor">
          <path d="M24 6c2.1 5.6 2.8 10.9 1.8 16-1 5-1.8 7.2-1.8 10 0-2.8-.8-5-1.8-10-1-5.1-.3-10.4 1.8-16z" />
          <path d="M14.5 10.5c3.3 4.3 5 8.6 5.4 13 .4 4.4-2.5 7.2-5 9-.9-5-2.6-9-5.8-12.1-3.4-3.4-1.8-7.1 1.6-9.9 1.4-1.1 2.6-1 3.8 0z" />
          <path d="M33.5 10.5c1.2-1 2.4-1.1 3.8 0 3.4 2.8 5 6.5 1.6 9.9-3.2 3.1-4.9 7.1-5.8 12.1-2.5-1.8-5.4-4.6-5-9 .4-4.4 2.1-8.7 5.4-13z" />
          <path d="M24 33.5c-6.2 1-11.3 4-13.8 7.5h27.6C35.3 37.5 30.2 34.5 24 33.5z" />
        </g>
      </svg>
      <span className="brand-logo-copy">
        <strong>Hatha Yogashala</strong>
        {showTagline && <small>Goa · India</small>}
      </span>
    </span>
  );
}
