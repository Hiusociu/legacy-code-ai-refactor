
          function formatDate(date) {
            return date.toISOString().split('T')[0];
          }
          
          function validateEmail(email) {
            return /^[^@]+@[^@]+.[^@]+$/.test(email);
          }
        