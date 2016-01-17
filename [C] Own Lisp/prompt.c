#include <stdio.h>
#include <stdlib.h>

#include <editline/readline.h>


int main(int argc, char** argv) {
  /* Print Version and Exit Information */
  puts("Lispy Version 0.0.0.0.0.1");
  puts("Press Ctrl+c to Exit\n");

  while(1) {
    /* Prompt input */
    char* input = readline("lispy> ");

    /* Add input to history */
    add_history(input);

    /* Prompt output */
    printf("%s\n", input);

    /* Free input */
    free(input);
  }

  return 0;
}
