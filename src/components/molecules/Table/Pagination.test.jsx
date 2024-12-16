// Pagination.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination Component", () => {
  test("renders pagination controls", () => {
    render(
      <Pagination
        totalItems={50}
        rowsPerPageOptions={[5, 10]}
        rowsPerPage={5}
        handlePageChange={() => {}}
        setRowsPerPage={() => {}}
      />
    );

    expect(screen.getByText("Rows per page:")).toBeInTheDocument();
    expect(screen.getByText("1–5 of 50")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "<" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: ">" })).toBeInTheDocument();
  });

  test("handles next page click", () => {
    const handlePageChange = jest.fn();
    render(
      <Pagination
        totalItems={50}
        rowsPerPageOptions={[5, 10]}
        rowsPerPage={5}
        handlePageChange={handlePageChange}
        setRowsPerPage={() => {}}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: ">" }));
    expect(handlePageChange).toHaveBeenCalledWith(2);
  });

  test("changes rows per page", () => {
    const setRowsPerPage = jest.fn();
    render(
      <Pagination
        totalItems={50}
        rowsPerPageOptions={[5, 10]}
        rowsPerPage={5}
        handlePageChange={() => {}}
        setRowsPerPage={setRowsPerPage}
      />
    );

    fireEvent.change(screen.getByRole("combobox"), { target: { value: "10" } });
    expect(setRowsPerPage).toHaveBeenCalledWith(10);
  });
});
