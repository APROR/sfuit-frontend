self.addEventListener('push', event => {
    // const data = event.data.json();
    self.registration.showNotification("test", {
      body: 'Yay it works!',
    });
  });