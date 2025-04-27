export enum StreamStatus {
  Scheduled = "Scheduled",
  Streaming = "Streaming",
  Completed = "Completed",
  Canceled = "Canceled",
  Paused = "Paused",
}

export interface StreamStatusProps {
  closed: boolean;
  isPaused: boolean;
  startTime: number;
  stopTime: number;
  pauseInfo?: {
    paused: boolean;
  };
}

/**
 * Determines the current status of a stream based on its properties and current time
 * @param stream The stream object containing status-related properties
 * @param currentTime Optional current timestamp in milliseconds, defaults to Date.now()
 * @returns The current StreamStatus
 */
export const getStreamStatus = (
  stream: StreamStatusProps,
  currentTime: number = Date.now()
): StreamStatus => {
  // Check if stream is canceled
  if (stream.closed) {
    return StreamStatus.Canceled;
  }

  // Check if stream is paused - handle both legacy and new pause info
  if (stream.isPaused || stream.pauseInfo?.paused) {
    return StreamStatus.Paused;
  }

  // Convert timestamps to milliseconds if they're in seconds
  const startTimeMs = stream.startTime * (stream.startTime < 1e12 ? 1000 : 1);
  const stopTimeMs = stream.stopTime * (stream.stopTime < 1e12 ? 1000 : 1);

  // Check stream timing status
  if (currentTime < startTimeMs) {
    return StreamStatus.Scheduled;
  }

  if (currentTime < stopTimeMs) {
    return StreamStatus.Streaming;
  }

  return StreamStatus.Completed;
};
