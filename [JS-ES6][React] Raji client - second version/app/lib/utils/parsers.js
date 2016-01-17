/**
 * Transform from seconds format to a MM:SS format.
 * @param  {Number} seconds Number to parse.
 * @return {string}         A representation of the given seconds in MM:SS format.
 */
export const parseTime = (seconds) => {
  if (seconds !== undefined && !isNaN(seconds)) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);

    // HACK: This fixes the format to use 00:00 (double cero) format always.
    const parsedMins = (`0${mins.toString()}`).slice(-2);
    const parsedSecs = (`0${secs.toString()}`).slice(-2);

    return `${parsedMins}:${parsedSecs}`;
  }

  // Probably the service doesn't has any info yet, inform the user that has to wait.
  return 'Loading...';
};
