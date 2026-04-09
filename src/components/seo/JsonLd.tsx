type JsonValue = Record<string, unknown> | Record<string, unknown>[];

/** Prefer a single @graph when multiple nodes are passed (Google-friendly). */
function normalizeLd(data: JsonValue): Record<string, unknown> {
  if (!Array.isArray(data)) {
    return data;
  }
  if (data.length === 0) {
    return {};
  }
  if (data.length === 1) {
    return data[0] as Record<string, unknown>;
  }
  const graph = data.map((node) => {
    const { ["@context"]: _c, ...rest } = node as Record<string, unknown>;
    return rest;
  });
  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function JsonLd({ data }: { data: JsonValue }) {
  const payload = normalizeLd(data);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
