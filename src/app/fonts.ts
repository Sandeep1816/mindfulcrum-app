import { Lexend_Deca, Lato } from "next/font/google";

/** Body & UI copy */
export const fontLato = Lato({
  weight: ["400", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-lato",
  display: "swap",
});

/** Headings & display titles */
export const fontLexendDeca = Lexend_Deca({
  subsets: ["latin", "latin-ext"],
  variable: "--font-lexend-deca",
  display: "swap",
});
