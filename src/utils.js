export const getImageUrl = (path) => {
    // Since assets are served from the public folder, just prepend '/assets/'
    return `/assets/${path}`;
  };