// src/utils/placeholder.js
export const generatePlaceholderImage = (width = 300, height = 200, text = 'No Image') => {
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="100%" height="100%" fill="%234A90E2"/><text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text></svg>`;
};

export const handleImageError = (e, width = 300, height = 200, text = 'No Image') => {
  e.target.src = generatePlaceholderImage(width, height, text);
};