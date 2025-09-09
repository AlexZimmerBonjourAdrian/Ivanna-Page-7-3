import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxWords?: number;
  minWords?: number;
  className?: string;
  autoSave?: boolean;
  onAutoSave?: (content: string) => void;
}

export function TextEditor({
  value,
  onChange,
  placeholder = "Comienza a escribir aquí...",
  maxWords,
  minWords,
  className,
  autoSave = false,
  onAutoSave
}: TextEditorProps) {
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  const wordCount = value.trim() ? value.trim().split(/\s+/).length : 0;

  useEffect(() => {
    if (autoSave && onAutoSave && value.trim()) {
      const timeoutId = setTimeout(() => {
        onAutoSave(value);
        setLastSaved(new Date());
      }, 2000); // Auto-save after 2 seconds of inactivity

      return () => clearTimeout(timeoutId);
    }
  }, [value, autoSave, onAutoSave]);

  const getWordCountColor = () => {
    if (maxWords && wordCount > maxWords) return "text-destructive";
    if (minWords && wordCount < minWords) return "text-muted-foreground";
    return "text-foreground";
  };

  return (
    <div className="space-y-2">
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn("text-editor resize-none", className)}
        data-testid="textarea-editor"
      />
      <div className="flex justify-between items-center text-sm">
        <span className={`font-medium ${getWordCountColor()}`} data-testid="text-word-count">
          Palabras: {wordCount}
          {maxWords && `/${maxWords}`}
        </span>
        {autoSave && (
          <span className="flex items-center space-x-1 text-muted-foreground" data-testid="text-save-status">
            <i className="fas fa-save"></i>
            <span>
              {lastSaved ? "Guardado automáticamente" : "Sin guardar"}
            </span>
          </span>
        )}
      </div>
    </div>
  );
}
