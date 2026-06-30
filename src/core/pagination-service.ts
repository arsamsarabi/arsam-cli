export class PaginationService {
  canGoOlder(index: number, total: number): boolean {
    return index < total - 1
  }

  canGoNewer(index: number): boolean {
    return index > 0
  }

  goOlder(index: number, total: number): number | null {
    return this.canGoOlder(index, total) ? index + 1 : null
  }

  goNewer(index: number): number | null {
    return this.canGoNewer(index) ? index - 1 : null
  }

  formatPosition(index: number, total: number): string {
    return `${index + 1} of ${total}`
  }
}
