import { environment } from '../environment';

afterEach((currentTest:any) =>{
  if(currentTest.state === 'failed'){
    // Perform actions only if the test failed
    // For example, navigate to an error page or a specific state for cleanup
    cy.visit('/error-report-page');
    // You could also log details or perform other cleanup tasks here
    cy.task('log',`Test "${currentTest.title}" failed. Navigating to error report.`);
    cy.clearCookies(); // Example: Clear browser cookies
    cy.clearLocalStorage(); // Example: Clear local storage
  }
});

describe('Angular App Timeout Test', () => {
  it('should not fail the test on a visit timeout', () => {
    // Intercepts the failure for this specific test
    cy.on('fail', (err) => {
      if (err.message.includes('cy.visit() timed out')) {
        cy.task('log','Caught a visit timeout specifically for this test');
        cy.visit("/home");
        return false;
      } else {
        cy.task('log','Caught an error:'+ err.message);
      }
      throw err;
    })
    cy.on('command:error',({ request, options }) => {
      cy.task('log','command:error:'+ request);
    })
    cy.on('request',({ request, options }) => {
      cy.task('log','Request made to:', request.url);
    })
    cy.on('response',({ request, response, options }) => {
      cy.task('log','Response received from:'+ response.url+ 'with status:'+ response.status);
    })
    cy.on('networkError', ({ error, options }) => {
      cy.task('error','Network Error:', error);
    })
    cy.on('HttpError',({ request, response, options }) => {
      cy.task('error','HTTP Error:'+ response.status+ 'for request to:'+ request.url);
    })
    cy.on('Timeout',({ options }) =>{
      cy.task('error','Request timed out after'+ options.timeout+ 'ms');
    });
    cy.on('Abort', ({ request, options }) =>{
      cy.task('warn','Request to'+ request.url+ 'was aborted');
    })
    cy.on('Redirect',({ request, response, options }) =>{
      cy.task('log','Request to'+ request.url+ 'was redirected to'+ response.redirectedToUrl);
    })
    cy.on('Retry',({ request, options, attempt }) =>{
      cy.task('log','Retrying request to'+ request.url+ 'Attempt number:'+ attempt);
    })
    cy.on('CorsError',({ request, error, options }) => {
      cy.task('error','CORS Error for request to:'+ request.url+ 'Error:'+ error);
    })
    cy.on('SecurityError',({ request, error, options }) =>{
      cy.task('error','Security Error for request to:'+ request.url+ 'Error:'+ error);
    })
    cy.on('DnsError',({ request, error, options }) => {
      cy.task('error','DNS Error for request to:'+ request.url+ 'Error:'+ error);
    })
    cy.on('ConnectionError', ({ request, error, options }) => {
      cy.task('error','Connection Error for request to:'+ request.url+ 'Error:'+ error);
    })
    cy.on('SslError', ({ request, error, options }) => {
      cy.task('error','SSL Error for request to:'+ request.url+ 'Error:'+ error);
    })
    cy.on('TimeoutError', ({ request, options }) => {
      cy.task('error','Timeout Error for request to:'+ request.url);
    })
    cy.on('AbortError', ({ request, options }) => {
      cy.task('warn','Abort Error for request to:'+ request.url);
    })
    cy.on('RedirectError', ({ request, response, options }) => {
      cy.task('error','Redirect Error for request to:'+ request.url);
    })
    cy.on('RetryError', ({ request, options, attempt, error }) => {
      cy.task('error','Retry Error for request to:'+ request.url+ 'Attempt number:'+ attempt+ 'Error:'+ error);
    })
    cy.on('CorsError', ({ request, error, options }) => {
      cy.task('error','CORS Error for request to:'+ request.url+ 'Error:'+ error);
    })
    cy.on('SecurityError', ({ request, error, options }) => {
      cy.task('error','Security Error for request to:'+ request.url+ 'Error:'+ error);
    })
    cy.on('DnsError', ({ request, error, options }) => {
      cy.task('error','DNS Error for request to:'+ request.url+ 'Error:'+ error);
    })
    cy.on('ConnectionError', ({ request, error, options }) => {
      cy.task('error','Connection Error for request to:'+ request.url+ 'Error:'+ error);
    })
    cy.on('SslError', ({ request, error, options }) => {
      cy.task('error','SSL Error for request to:'+ request.url+ 'Error:'+ error);
    })
    cy.on('TimeoutError', ({ request, options }) => {
      cy.task('error','Timeout Error for request to:'+ request.url);
    })
    cy.on('AbortError', ({ request, options }) => {
      cy.task('warn','Abort Error for request to:'+ request.url);
    })
    cy.on('RedirectError', ({ request, response, options }) => {
      cy.task('error','Redirect Error for request to:'+ request.url);
    })
    cy.on('RetryError', ({ request, options, attempt, error }) => {
      cy.task('error','Retry Error for request to:'+ request.url+ 'Attempt number:'+ attempt+ 'Error:'+ error);
    })
    cy.on('RequestError', ({ request, options, error }) => {
      cy.task('error','Request Error:'+ error);
    })
    cy.on('ResponseError', ({ request, response, options }) => {
      cy.task('error','Response Error:'+ response);
    });

    // In this example, we visit an invalid URL with a short timeout
    cy.visit('/', {
      // timeout: 1000,
      retryOnStatusCodeFailure: true,
      retryOnNetworkFailure: true,
      failOnStatusCode: false
    });

    // Continue with other test logic, even if the visit fails
    cy.task('log','Continuing test execution after potential timeout...');
  });
});

describe('Home Page Title Test', () => {
  it('should have the correct page title', () => {
    cy.clearCookies();
    cy.visit('localhost:8080', {
      onBeforeLoad: win => {
        win.sessionStorage.clear();
      },
      onLoad: contentWindow => {
        // contentWindow is the remote page's window object
        // You could potentially check for Angular-specific properties here
        // if (contentWindow.angular) {
        //   cy.task('log','Angular is loaded!');
        // }
        const title = contentWindow.document.title;
        expect(title).to.equal('Thulasiram Seelamsetty - CV Resume Freelance Portfolio');
      },
      retryOnStatusCodeFailure: true,
      retryOnNetworkFailure: true,
      failOnStatusCode: true,
      timeout: 12000 // Increase timeout to 2 minutes
    });
    // Wait for 5*60 seconds to ensure the page loads completely
    // cy.wait(5 * 60 * 1000);
    cy.window().then((win) => {
      const title = win.document.title;
      expect(title).to.equal('Thulasiram Seelamsetty - CV Resume Freelance Portfolio');
    });
  });
});

