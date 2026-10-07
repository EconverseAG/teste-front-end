import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { useState } from "react"
import { CATEGORY_TABS, type CategoryTab } from "@/lib/catalog"
import { CategoryTabs } from "./CategoryTabs"

function Harness() {
  const [active, setActive] = useState<CategoryTab["id"]>("celular")
  return <CategoryTabs tabs={CATEGORY_TABS} active={active} onChange={setActive} panelId="panel" idPrefix="t" label="Categorias" />
}

describe("CategoryTabs", () => {
  it("renderiza as seis abas do layout com a primeira selecionada", () => {
    render(<Harness />)
    const tabs = screen.getAllByRole("tab")
    expect(tabs.map((tab) => tab.textContent)).toEqual(["Celular", "Acessórios", "Tablets", "Notebooks", "TVs", "Ver todos"])
    expect(tabs[0]).toHaveAttribute("aria-selected", "true")
    expect(tabs[0]).toHaveAttribute("aria-controls", "panel")
  })

  it("seleciona com clique", async () => {
    const user = userEvent.setup()
    render(<Harness />)
    await user.click(screen.getByRole("tab", { name: "Tablets" }))
    expect(screen.getByRole("tab", { name: "Tablets" })).toHaveAttribute("aria-selected", "true")
  })

  it("navega por setas, Home e End com tabindex itinerante", async () => {
    const user = userEvent.setup()
    render(<Harness />)
    const first = screen.getByRole("tab", { name: "Celular" })
    first.focus()

    await user.keyboard("{ArrowLeft}")
    const last = screen.getByRole("tab", { name: "Ver todos" })
    expect(last).toHaveFocus()
    expect(last).toHaveAttribute("aria-selected", "true")
    expect(last).toHaveAttribute("tabindex", "0")
    expect(first).toHaveAttribute("tabindex", "-1")

    await user.keyboard("{Home}{ArrowRight}")
    expect(screen.getByRole("tab", { name: "Acessórios" })).toHaveFocus()
  })
})
