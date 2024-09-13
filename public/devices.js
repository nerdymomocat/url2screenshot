const _devices = [
  // 桌面设备
  {
    width: 1920,
    height: 1080,
    scale: 1,
    device: "Desktop 1920x1080",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  },
  {
    width: 1280,
    height: 1024,
    scale: 1,
    device: "Desktop 1280x1024",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  },
  {
    width: 1280,
    height: 800,
    scale: 1,
    device: "Desktop 1280x800",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15"
  },
  {
    width: 1366,
    height: 768,
    scale: 1,
    device: "Desktop 1366x768",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
  },
  // iOS设备
  {
    width: 414,
    height: 896,
    scale: 3,
    device: "iPhone 15 Pro Max",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1"
  },
  {
    width: 375,
    height: 812,
    scale: 3,
    device: "iPhone 15",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1"
  },
  {
    width: 414,
    height: 896,
    scale: 2,
    device: "iPhone 14",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 17_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1"
  },
  {
    width: 414,
    height: 736,
    scale: 2.6087,
    device: "iPhone 8 Plus",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Mobile/15E148 Safari/604.1"
  },
  {
    width: 375,
    height: 667,
    scale: 2,
    device: "iPhone SE (2nd generation)",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6 Mobile/15E148 Safari/604.1"
  },
  {
    width: 1024,
    height: 1366,
    scale: 2,
    device: "iPad Pro 12.9 (6th generation)",
    userAgent: "Mozilla/5.0 (iPad; CPU OS 17_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1"
  },
  {
    width: 768,
    height: 1024,
    scale: 2,
    device: "iPad Air (5th generation)",
    userAgent: "Mozilla/5.0 (iPad; CPU OS 17_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1"
  },

  // 安卓设备
  {
    width: 411,
    height: 731,
    scale: 2.627,
    device: "Google Pixel 6",
    userAgent: "Mozilla/5.0 (Linux; Android 13; Pixel 6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.144 Mobile Safari/537.36"
  },
  {
    width: 360,
    height: 760,
    scale: 4,
    device: "Galaxy S23",
    userAgent: "Mozilla/5.0 (Linux; Android 13; SM-S911B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.144 Mobile Safari/537.36"
  },
  {
    width: 360,
    height: 740,
    scale: 4,
    device: "Galaxy S22",
    userAgent: "Mozilla/5.0 (Linux; Android 13; SM-S901B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.144 Mobile Safari/537.36"
  },
  {
    width: 360,
    height: 640,
    scale: 4,
    device: "Galaxy S21",
    userAgent: "Mozilla/5.0 (Linux; Android 13; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.144 Mobile Safari/537.36"
  },
  {
    width: 427,
    height: 240,
    scale: 1.5,
    device: "Google Glass",
    userAgent: "Mozilla/5.0 (Linux; Android 10; Glass) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.144 Mobile Safari/537.36"
  },
  {
    width: 800,
    height: 1280,
    scale: 1.5,
    device: "Kindle Fire HD 10",
    userAgent: "Mozilla/5.0 (Linux; Android 11; KFTRWI) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.144 Safari/537.36"
  }
  ]