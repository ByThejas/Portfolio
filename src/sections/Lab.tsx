import { useMemo, useState } from "react";
import {
  Braces,
  Check,
  Clipboard,
  Code2,
  Copy,
  Hash,
  Link2,
  Palette,
  RefreshCw,
  Regex,
  Sparkles,
  Terminal,
  Wand2,
} from "lucide-react";
import "./Lab.css";

type ToolId =
  | "json"
  | "regex"
  | "color"
  | "utilities";

const tools = [
  {
    id: "json" as ToolId,
    number: "01",
    label: "JSON FORMATTER",
    icon: Braces,
    description: "Format, validate and minify JSON.",
  },
  {
    id: "regex" as ToolId,
    number: "02",
    label: "REGEX TESTER",
    icon: Regex,
    description: "Test regular expressions instantly.",
  },
  {
    id: "color" as ToolId,
    number: "03",
    label: "COLOR LAB",
    icon: Palette,
    description: "Explore colors and generate palettes.",
  },
  {
    id: "utilities" as ToolId,
    number: "04",
    label: "DEV UTILITIES",
    icon: Terminal,
    description: "Useful little tools for everyday development.",
  },
];

const sampleJson = `{
  "name": "Thejas",
  "role": "Software Engineer",
  "projects": ["Kaizen", "Productivity-116"],
  "available": true
}`;

function copyToClipboard(value: string) {
  if (!value) return;
  navigator.clipboard.writeText(value);
}

function hexToRgb(hex: string) {
  const clean = hex.replace("#", "");

  if (!/^[0-9a-fA-F]{6}$/.test(clean)) {
    return null;
  }

  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  };
}

function rgbToHsl(r: number, g: number, b: number) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;

    s =
      l > 0.5
        ? d / (2 - max - min)
        : d / (max + min);

    switch (max) {
      case r:
        h =
          (g - b) / d +
          (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }

    h /= 6;
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

function randomHex() {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
}

export function Lab() {
  const [activeTool, setActiveTool] =
    useState<ToolId>("json");

  return (
    <section id="lab" className="lab-section">
      {/* HEADER */}

      <div className="lab-header">
        <div className="lab-index">
          <span>05</span>
          <span>LAB / DEVELOPER TOOLS</span>
        </div>

        <div className="lab-header-line" />

        <div className="lab-live">
          <span />
          TOOLS ONLINE
        </div>
      </div>

      {/* INTRO */}

      <div className="lab-intro">
        <div className="lab-heading">
          <span className="lab-kicker">
            UTILITIES / EXPERIMENTS / SIDE QUESTS
          </span>

          <h2>
            BUILD
            <br />
            <span>TOOLS.</span>
          </h2>
        </div>

        <div className="lab-intro-copy">
          <p>
            Small tools I find useful while
            building things.
          </p>

          <p>
            Everything runs locally in your
            browser. No backend. No nonsense.
          </p>
        </div>
      </div>

      {/* TOOL NAV */}

      <div className="lab-tool-nav">
        {tools.map((tool) => {
          const Icon = tool.icon;
          const active =
            activeTool === tool.id;

          return (
            <button
              key={tool.id}
              className={`lab-tool-tab ${
                active ? "active" : ""
              }`}
              onClick={() =>
                setActiveTool(tool.id)
              }
            >
              <span className="lab-tool-number">
                {tool.number}
              </span>

              <Icon size={15} strokeWidth={1.7} />

              <span>{tool.label}</span>
            </button>
          );
        })}
      </div>

      {/* TOOL DESCRIPTION */}

      <div className="lab-tool-description">
        <div>
          <span>ACTIVE TOOL</span>
          <strong>
            {
              tools.find(
                (tool) =>
                  tool.id === activeTool
              )?.label
            }
          </strong>
        </div>

        <p>
          {
            tools.find(
              (tool) =>
                tool.id === activeTool
            )?.description
          }
        </p>
      </div>

      {/* TOOL PANEL */}

      <div className="lab-tool-panel">
        {activeTool === "json" && (
          <JsonTool />
        )}

        {activeTool === "regex" && (
          <RegexTool />
        )}

        {activeTool === "color" && (
          <ColorTool />
        )}

        {activeTool === "utilities" && (
          <UtilitiesTool />
        )}
      </div>

      {/* FOOTER */}

      <div className="lab-footer">
        <span>THEJAS / LAB</span>

        <div className="lab-footer-mark">
          <span />
          <span />
          <span />
        </div>

        <span>05 / 06</span>
      </div>
    </section>
  );
}

/* =====================================================
   JSON TOOL
===================================================== */

function JsonTool() {
  const [input, setInput] =
    useState(sampleJson);

  const [output, setOutput] =
    useState("");

  const [error, setError] =
    useState("");

  const [copied, setCopied] =
    useState(false);

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);

      setOutput(
        JSON.stringify(parsed, null, 2)
      );

      setError("");
    } catch {
      setOutput("");
      setError("INVALID JSON");
    }
  };

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(input);

      setOutput(
        JSON.stringify(parsed)
      );

      setError("");
    } catch {
      setOutput("");
      setError("INVALID JSON");
    }
  };

  const copyOutput = () => {
    if (!output) return;

    copyToClipboard(output);
    setCopied(true);

    setTimeout(
      () => setCopied(false),
      1500
    );
  };

  return (
    <div className="tool-content json-tool">
      <div className="tool-column">
        <ToolHeader
          number="01"
          label="INPUT"
          icon={<Code2 size={14} />}
        />

        <textarea
          className="code-editor"
          value={input}
          onChange={(event) =>
            setInput(event.target.value)
          }
          spellCheck={false}
        />
      </div>

      <div className="tool-center">
        <button
          className="tool-action primary"
          onClick={formatJson}
        >
          <Wand2 size={14} />
          FORMAT
        </button>

        <button
          className="tool-action"
          onClick={minifyJson}
        >
          <Braces size={14} />
          MINIFY
        </button>
      </div>

      <div className="tool-column">
        <ToolHeader
          number="02"
          label="OUTPUT"
          icon={<Sparkles size={14} />}
          action={
            <button
              className="icon-action"
              onClick={copyOutput}
              disabled={!output}
              title="Copy output"
            >
              {copied ? (
                <Check size={14} />
              ) : (
                <Copy size={14} />
              )}
            </button>
          }
        />

        <pre className="code-output">
          {error ? (
            <span className="tool-error">
              {error}
            </span>
          ) : (
            output ||
            "// formatted JSON appears here"
          )}
        </pre>
      </div>
    </div>
  );
}

/* =====================================================
   REGEX TOOL
===================================================== */

function RegexTool() {
  const [pattern, setPattern] =
    useState("\\b\\w+@\\w+\\.\\w+\\b");

  const [flags, setFlags] =
    useState("gi");

  const [text, setText] =
    useState(
      "Contact hello@example.com or team@thejas.dev"
    );

  const result = useMemo(() => {
    try {
      const regex = new RegExp(
        pattern,
        flags
      );

      const matches = [
        ...text.matchAll(regex),
      ];

      return {
        matches,
        error: "",
      };
    } catch {
      return {
        matches: [],
        error: "INVALID REGEX",
      };
    }
  }, [pattern, flags, text]);

  const highlighted = useMemo(() => {
    if (result.error || !pattern) {
      return text;
    }

    try {
      const regex = new RegExp(
        pattern,
        flags.includes("g")
          ? flags
          : `${flags}g`
      );

      return text.replace(
        regex,
        (match) =>
          `<mark>${match}</mark>`
      );
    } catch {
      return text;
    }
  }, [
    pattern,
    flags,
    text,
    result.error,
  ]);

  return (
    <div className="tool-content regex-tool">
      <div className="regex-controls">
        <div className="input-group">
          <label>REGULAR EXPRESSION</label>

          <div className="input-with-prefix">
            <span>/</span>

            <input
              value={pattern}
              onChange={(event) =>
                setPattern(
                  event.target.value
                )
              }
              spellCheck={false}
            />

            <span>/</span>

            <input
              className="flags-input"
              value={flags}
              onChange={(event) =>
                setFlags(
                  event.target.value
                )
              }
              spellCheck={false}
            />
          </div>
        </div>

        <div className="regex-match-count">
          <span>MATCHES</span>
          <strong>
            {result.matches.length}
          </strong>
        </div>
      </div>

      <div className="regex-editor-grid">
        <div className="tool-column">
          <ToolHeader
            number="01"
            label="TEST STRING"
            icon={<Regex size={14} />}
          />

          <textarea
            className="code-editor"
            value={text}
            onChange={(event) =>
              setText(event.target.value)
            }
            spellCheck={false}
          />
        </div>

        <div className="tool-column">
          <ToolHeader
            number="02"
            label="MATCH PREVIEW"
            icon={<Sparkles size={14} />}
          />

          <div className="regex-preview">
            {result.error ? (
              <span className="tool-error">
                {result.error}
              </span>
            ) : (
              <span
                dangerouslySetInnerHTML={{
                  __html: highlighted,
                }}
              />
            )}
          </div>
        </div>
      </div>

      <div className="regex-result">
        <span>DETECTED MATCHES</span>

        <div>
          {result.matches.length === 0 ? (
            <em>No matches found.</em>
          ) : (
            result.matches.map(
              (match, index) => (
                <code key={`${match.index}-${index}`}>
                  {match[0]}
                </code>
              )
            )
          )}
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   COLOR TOOL
===================================================== */

function ColorTool() {
  const [hex, setHex] =
    useState("#C9F052");

  const rgb = hexToRgb(hex);

  const hsl = rgb
    ? rgbToHsl(rgb.r, rgb.g, rgb.b)
    : null;

  const palette = useMemo(() => {
    if (!rgb) return [];

    return [
      hex,
      "#080808",
      "#F3F1EB",
      "#5D73FF",
      "#FF7195",
    ];
  }, [hex, rgb]);

  const generateColor = () => {
    setHex(randomHex());
  };

  const normalizedHex =
    /^#[0-9A-Fa-f]{6}$/.test(hex)
      ? hex
      : "#000000";

  return (
    <div className="tool-content color-tool">
      <div className="color-main">
        <div
          className="color-preview"
          style={{
            background: normalizedHex,
          }}
        >
          <span>
            {normalizedHex}
          </span>
        </div>

        <div className="color-controls">
          <label>HEX COLOR</label>

          <div className="color-input-row">
            <input
              type="text"
              value={hex}
              onChange={(event) =>
                setHex(
                  event.target.value.toUpperCase()
                )
              }
              spellCheck={false}
            />

            <button
              className="tool-action primary"
              onClick={generateColor}
            >
              <RefreshCw size={14} />
              RANDOM
            </button>
          </div>

          <div className="color-values">
            <ColorValue
              label="RGB"
              value={
                rgb
                  ? `${rgb.r}, ${rgb.g}, ${rgb.b}`
                  : "—"
              }
            />

            <ColorValue
              label="HSL"
              value={
                hsl
                  ? `${hsl.h}°, ${hsl.s}%, ${hsl.l}%`
                  : "—"
              }
            />

            <ColorValue
              label="HEX"
              value={hex}
            />
          </div>
        </div>
      </div>

      <div className="palette-section">
        <div className="palette-heading">
          <span>PALETTE</span>
          <small>CLICK TO COPY</small>
        </div>

        <div className="palette-grid">
          {palette.map((color) => (
            <button
              key={color}
              className="palette-color"
              style={{
                background: color,
              }}
              onClick={() =>
                copyToClipboard(color)
              }
              title={`Copy ${color}`}
            >
              <span>{color}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ColorValue({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="color-value">
      <span>{label}</span>

      <strong>{value}</strong>

      <button
        onClick={() =>
          copyToClipboard(value)
        }
        title={`Copy ${label}`}
      >
        <Clipboard size={13} />
      </button>
    </div>
  );
}

/* =====================================================
   DEV UTILITIES
===================================================== */

function UtilitiesTool() {
  const [uuid, setUuid] =
    useState("");

  const [timestamp, setTimestamp] =
    useState(
      Math.floor(Date.now() / 1000).toString()
    );

  const [base64Input, setBase64Input] =
    useState("Hello, Thejas!");

  const [base64Output, setBase64Output] =
    useState("");

  const [urlInput, setUrlInput] =
    useState(
      "https://thejas.dev/hello world"
    );

  const [urlOutput, setUrlOutput] =
    useState("");

  const generateUuid = () => {
    setUuid(crypto.randomUUID());
  };

  const encodeBase64 = () => {
    setBase64Output(
      btoa(
        unescape(
          encodeURIComponent(base64Input)
        )
      )
    );
  };

  const decodeBase64 = () => {
    try {
      setBase64Output(
        decodeURIComponent(
          escape(atob(base64Input))
        )
      );
    } catch {
      setBase64Output("INVALID BASE64");
    }
  };

  const encodeUrl = () => {
    setUrlOutput(
      encodeURIComponent(urlInput)
    );
  };

  const decodeUrl = () => {
    try {
      setUrlOutput(
        decodeURIComponent(urlInput)
      );
    } catch {
      setUrlOutput("INVALID URL ENCODING");
    }
  };

  return (
    <div className="tool-content utilities-tool">
      <UtilityCard
        number="01"
        title="UUID GENERATOR"
        icon={<Hash size={15} />}
      >
        <div className="utility-result">
          {uuid || "Generate a UUID"}
        </div>

        <div className="utility-actions">
          <button
            className="tool-action primary"
            onClick={generateUuid}
          >
            <RefreshCw size={14} />
            GENERATE
          </button>

          <button
            className="icon-action"
            onClick={() =>
              copyToClipboard(uuid)
            }
            disabled={!uuid}
          >
            <Copy size={14} />
          </button>
        </div>
      </UtilityCard>

      <UtilityCard
        number="02"
        title="UNIX TIMESTAMP"
        icon={<Terminal size={15} />}
      >
        <div className="utility-result">
          {timestamp}
        </div>

        <div className="utility-actions">
          <button
            className="tool-action primary"
            onClick={() =>
              setTimestamp(
                Math.floor(
                  Date.now() / 1000
                ).toString()
              )
            }
          >
            <RefreshCw size={14} />
            NOW
          </button>

          <button
            className="icon-action"
            onClick={() =>
              copyToClipboard(timestamp)
            }
          >
            <Copy size={14} />
          </button>
        </div>
      </UtilityCard>

      <UtilityCard
        number="03"
        title="BASE64"
        icon={<Code2 size={15} />}
      >
        <input
          className="utility-input"
          value={base64Input}
          onChange={(event) =>
            setBase64Input(
              event.target.value
            )
          }
        />

        <div className="utility-actions">
          <button
            className="tool-action"
            onClick={encodeBase64}
          >
            ENCODE
          </button>

          <button
            className="tool-action"
            onClick={decodeBase64}
          >
            DECODE
          </button>
        </div>

        <div className="utility-output">
          {base64Output || "Output appears here"}
        </div>

        <button
          className="icon-action utility-copy"
          onClick={() =>
            copyToClipboard(base64Output)
          }
          disabled={!base64Output}
        >
          <Copy size={14} />
        </button>
      </UtilityCard>

      <UtilityCard
        number="04"
        title="URL ENCODER"
        icon={<Link2 size={15} />}
      >
        <input
          className="utility-input"
          value={urlInput}
          onChange={(event) =>
            setUrlInput(
              event.target.value
            )
          }
        />

        <div className="utility-actions">
          <button
            className="tool-action"
            onClick={encodeUrl}
          >
            ENCODE
          </button>

          <button
            className="tool-action"
            onClick={decodeUrl}
          >
            DECODE
          </button>
        </div>

        <div className="utility-output">
          {urlOutput || "Output appears here"}
        </div>

        <button
          className="icon-action utility-copy"
          onClick={() =>
            copyToClipboard(urlOutput)
          }
          disabled={!urlOutput}
        >
          <Copy size={14} />
        </button>
      </UtilityCard>
    </div>
  );
}

function UtilityCard({
  number,
  title,
  icon,
  children,
}: {
  number: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="utility-card">
      <div className="utility-card-header">
        <span>{number}</span>

        <div>
          {icon}
          <strong>{title}</strong>
        </div>
      </div>

      <div className="utility-card-body">
        {children}
      </div>
    </div>
  );
}

function ToolHeader({
  number,
  label,
  icon,
  action,
}: {
  number: string;
  label: string;
  icon: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div className="tool-header">
      <div>
        <span>{number}</span>

        {icon}

        <strong>{label}</strong>
      </div>

      {action}
    </div>
  );
}