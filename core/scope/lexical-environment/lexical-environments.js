import {
  moduleLogger
} from './module-logger';

// GLOBAL LEXICAL ENVIRONMENT
// (NO CLOSING ENVIRONMENT)

// Global Logger method (GLE)
function globalLogger(sumink) {
  // Function Lexical Enviroment:

  {
    // Block Lexical Environment
    console.log(sumink)
  }

}

moduleLogger("oi oi");