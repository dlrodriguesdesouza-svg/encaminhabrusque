"""Atualiza o aviso compartilhado nos HTMLs estáticos, sem dependência de JS."""

from pathlib import Path
import re


ROOT = Path(__file__).resolve().parents[1]
BEGIN = "      <!-- BEGIN shared:transparencia -->"
END = "      <!-- END shared:transparencia -->"
PATTERN = re.compile(re.escape(BEGIN) + r".*?" + re.escape(END), re.S)


def main():
    card = (ROOT / "_includes/transparencia.html").read_text(encoding="utf-8").rstrip()
    block = f"{BEGIN}\n{card}\n{END}"
    updates = []
    for page in sorted(ROOT.glob("*.html")):
        content = page.read_text(encoding="utf-8")
        if len(PATTERN.findall(content)) != 1:
            raise ValueError(f"{page.name}: esperado exatamente um aviso compartilhado")
        updates.append((page, PATTERN.sub(lambda _: block, content)))
    for page, content in updates:
        if content != page.read_text(encoding="utf-8"):
            page.write_text(content, encoding="utf-8")
    print(f"Aviso sincronizado em {len(updates)} páginas.")


if __name__ == "__main__":
    main()
