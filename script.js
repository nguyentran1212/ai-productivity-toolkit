function summarize() {
  const text = document.getElementById("inputText").value;
  document.getElementById("output").innerText =
    "🔎 Summary: " + text.slice(0, 100) + "...";
}

function rewrite() {
  const text = document.getElementById("inputText").value;
  document.getElementById("output").innerText =
    "✍️ Rewritten: " + text.split("").reverse().join("");
}

function ideas() {
  document.getElementById("output").innerText =
    "💡 Ideas:\n- Build a startup\n- Create a content channel\n- Launch an AI tool";
}
