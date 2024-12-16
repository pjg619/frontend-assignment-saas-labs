// Table.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Table from "./index";

const mockData = [
  { "amt.pledged": "$100", "percentage.funded": "50%" },
  { "amt.pledged": "$200", "percentage.funded": "75%" },
  { "amt.pledged": "$300", "percentage.funded": "100%" },
];

describe("Table Component", () => {
  test("renders table headers correctly", () => {
    render(<Table data={mockData} />);
    expect(screen.getByText("S.No.")).toBeInTheDocument();
    expect(screen.getByText("Percentage funded")).toBeInTheDocument();
    expect(screen.getByText("Amount pledged")).toBeInTheDocument();
  });

  test("renders correct number of rows", () => {
    render(<Table data={mockData} />);
    expect(screen.getAllByText(/\$\d{3}/)).toHaveLength(3);
  });

  test("handles page change", () => {
    render(<Table data={mockData} />);
    expect(screen.getByText("$100")).toBeInTheDocument();
    // Simulate page change (assuming Pagination component handles it)
    fireEvent.click(screen.getByText(">"));
    // Test behavior after page change (depends on Pagination setup)
  });
});
