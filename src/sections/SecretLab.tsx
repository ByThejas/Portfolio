import { useEffect, useState } from "react";
import { Terminal, X } from "lucide-react";
import { Lab } from "./Lab";
import "./SecretLab.css";

export function SecretLab() {
  const [open, setOpen] = useState(false);
  const [booting, setBooting] = useState(false);
  const [sequence, setSequence] = useState("");

  const openLab = () => {
    setOpen(true);
    setBooting(true);

    window.setTimeout(() => {
      setBooting(false);
    }, 1200);
  };

  const closeLab = () => {
    setOpen(false);
    setBooting(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (event.key === "Escape") {
        closeLab();
        return;
      }

      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        openLab();
        return;
      }

      const nextSequence = (
        sequence + event.key.toLowerCase()
      ).slice(-3);

      setSequence(nextSequence);

      if (nextSequence === "lab") {
        openLab();
        setSequence("");
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [sequence]);

  if (!open) {
    return null;
  }

  return (
    <div className="secret-lab-overlay">
      <div className="secret-lab-shell">
        {booting ? (
          <BootScreen />
        ) : (
          <>
            <div className="secret-lab-bar">
              <div className="secret-lab-brand">
                <Terminal size={14} />

                <span>THEJAS.OS</span>

                <span className="secret-lab-slash">
                  /
                </span>

                <span>PRIVATE INSTANCE</span>
              </div>

              <button
                className="secret-lab-close"
                onClick={closeLab}
                aria-label="Close secret lab"
              >
                <span>ESC</span>
                <X size={15} />
              </button>
            </div>

            <div className="secret-lab-access">
              <span className="secret-lab-access-dot" />

              ACCESS GRANTED
            </div>

            <Lab />
          </>
        )}
      </div>
    </div>
  );
}

function BootScreen() {
  return (
    <div className="secret-boot">
      <div className="secret-boot-terminal">
        <div className="secret-boot-top">
          <span>THEJAS.OS</span>
          <span>PRIVATE INSTANCE</span>
        </div>

        <div className="secret-boot-body">
          <div>&gt; initiating private instance...</div>

          <div>&gt; checking permissions...</div>

          <div className="boot-success">
            &gt; permission granted
          </div>

          <div>&gt; loading developer tools...</div>

          <div className="boot-progress">
            <span />
          </div>

          <div className="boot-cursor">
            &gt;_
          </div>
        </div>
      </div>
    </div>
  );
}