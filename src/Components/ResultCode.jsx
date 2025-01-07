function ResultCode({ params, tailwindBoolean }) {
  return (
    <div className="pb-8">
      <h2 className="titles">{tailwindBoolean ? "TailwindCSS" : "CSS"}</h2>
      <div className="resultCodeContainer">
        {tailwindBoolean ? (
          <p>{`shadow-[${params.shadowInset ? "inset_" : ""}${
            params.horizontal
          }px_${params.vertical}px_${params.blur}px_${params.spread}px_${
            params.shadowColor
          }]`}</p>
        ) : (
          <>
            <p>
              -webkit-box-shadow: {params.horizontal}px {params.vertical}px{" "}
              {params.blur}px {params.spread}px {params.shadowColor}{" "}
              {params.shadowInset ? "inset" : ""};
            </p>
            <p>
              -moz-box-shadow: {params.horizontal}px {params.vertical}px{" "}
              {params.blur}px {params.spread}px {params.shadowColor}{" "}
              {params.shadowInset ? "inset" : ""};
            </p>
            <p>
              box-shadow: {params.horizontal}px {params.vertical}px{" "}
              {params.blur}px {params.spread}px {params.shadowColor}{" "}
              {params.shadowInset ? "inset" : ""};
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default ResultCode;
