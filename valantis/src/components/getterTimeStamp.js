export function getPasswordWithTimestamp() {
    const password = 'Valantis'
    const timestamp = new Date().toISOString().slice(0, 10).replace(/-/g, '')
    return `${password}_${timestamp}`;
  }