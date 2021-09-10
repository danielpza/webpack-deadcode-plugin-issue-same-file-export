export function sameFileExport() {
  return "same file export";
}

export function foo() {
  return sameFileExport();
}

export function unusedExport() {
  return "not used :(";
}
