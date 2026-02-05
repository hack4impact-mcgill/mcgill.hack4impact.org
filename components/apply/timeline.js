import React, { useEffect, useRef, useState } from "react";

const Timeline = ({ processes }) => {
  const itemRefs = useRef([]);
  const [visibleItems, setVisibleItems] = useState({});

  if (!processes || !processes.length) {
    return null;
  }

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, processes.length);

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setVisibleItems(
        processes.reduce((acc, _, index) => {
          acc[index] = true;
          return acc;
        }, {})
      );
      return undefined;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return;
          }

          const index = Number(entry.target.getAttribute("data-index"));
          setVisibleItems(prev => (prev[index] ? prev : { ...prev, [index]: true }));
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    itemRefs.current.forEach(item => {
      if (item) {
        observer.observe(item);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [processes]);

  return (
    <section className="apply-timeline">
      <ol className="timeline-list">
        {processes.map((process, index) => (
          <li
            key={`${process.title}-${index}`}
            className={`timeline-item ${visibleItems[index] ? "is-visible" : ""}`}
            ref={element => {
              itemRefs.current[index] = element;
            }}
            data-index={index}
          >
            <div className="timeline-marker">
              <span className="timeline-icon">{process.icon}</span>
            </div>

            <article className="timeline-card">
              {process.date ? <p className="timeline-date">{process.date}</p> : null}
              <h3 className="timeline-title">{process.title}</h3>
              <div className="timeline-detail">{process.detail}</div>
            </article>
          </li>
        ))}
      </ol>

      <style jsx>{`
        .apply-timeline {
          --timeline-accent: #155da1;
          --timeline-accent-soft: #4b97de;
          --timeline-card-border: rgba(21, 93, 161, 0.14);
          --timeline-text: #131927;
          --timeline-muted: #5a6472;
        }

        .timeline-list {
          list-style: none;
          margin: 0;
          padding: 0 0 0 84px;
          position: relative;
        }

        .timeline-list::before {
          content: "";
          position: absolute;
          left: 36px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(
            180deg,
            var(--timeline-accent-soft) 0%,
            rgba(75, 151, 222, 0.1) 100%
          );
        }

        .timeline-item {
          position: relative;
          margin-bottom: 26px;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-marker {
          position: absolute;
          left: -84px;
          top: 12px;
          width: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .timeline-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: linear-gradient(
            160deg,
            var(--timeline-accent-soft) 0%,
            var(--timeline-accent) 100%
          );
          box-shadow: 0 12px 26px rgba(21, 93, 161, 0.24);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        .timeline-icon :global(svg) {
          width: 24px;
          height: 24px;
          fill: currentColor;
        }

        .timeline-card {
          background: linear-gradient(180deg, #fff 0%, #f8fbff 100%);
          border: 1px solid var(--timeline-card-border);
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(11, 34, 60, 0.08);
          padding: 20px 22px;
          transition: transform 320ms ease, box-shadow 320ms ease, opacity 320ms ease;
        }

        .timeline-item {
          opacity: 0;
          transform: translateY(24px);
          transition: transform 480ms ease, opacity 480ms ease;
        }

        .timeline-item.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .timeline-item.is-visible .timeline-card:hover {
          transform: translateY(-1px);
          box-shadow: 0 14px 34px rgba(11, 34, 60, 0.12);
        }

        .timeline-date {
          margin: 0 0 10px;
          color: var(--timeline-accent);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .timeline-title {
          margin: 0;
          color: var(--timeline-text);
          font-size: 22px;
          font-weight: 700;
          line-height: 1.3;
        }

        .timeline-detail {
          margin-top: 12px;
          color: var(--timeline-muted);
          line-height: 1.65;
          font-size: 16px;
        }

        .timeline-detail :global(p:first-child) {
          margin-top: 0;
        }

        .timeline-detail :global(p:last-child) {
          margin-bottom: 0;
        }

        @media (max-width: 767px) {
          .timeline-list {
            padding-left: 64px;
          }

          .timeline-list::before {
            left: 26px;
          }

          .timeline-marker {
            left: -64px;
            width: 56px;
          }

          .timeline-icon {
            width: 40px;
            height: 40px;
            border-radius: 12px;
          }

          .timeline-icon :global(svg) {
            width: 20px;
            height: 20px;
          }

          .timeline-card {
            padding: 18px;
          }

          .timeline-title {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Timeline;
