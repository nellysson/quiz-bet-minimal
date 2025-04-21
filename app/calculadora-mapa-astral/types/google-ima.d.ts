// Definição de tipos para o Google IMA SDK

declare global {
  interface Window {
    google: {
      ima: {
        AdDisplayContainer: new (
          container: HTMLElement,
          video?: HTMLVideoElement,
        ) => {
          initialize: () => void
        }
        AdsLoader: new (
          container: any,
        ) => {
          addEventListener: (event: string, callback: (event: any) => void) => void
          requestAds: (request: any) => void
        }
        AdsRequest: new () => {
          adTagUrl: string
          linearAdSlotWidth: number
          linearAdSlotHeight: number
          nonLinearAdSlotWidth: number
          nonLinearAdSlotHeight: number
        }
        AdsManagerLoadedEvent: {
          Type: {
            ADS_MANAGER_LOADED: string
          }
        }
        AdEvent: {
          Type: {
            STARTED: string
            COMPLETE: string
            ALL_ADS_COMPLETED: string
            USER_CLOSE: string
            SKIPPED: string
            CONTENT_RESUME_REQUESTED: string
          }
        }
        AdErrorEvent: {
          Type: {
            AD_ERROR: string
          }
        }
        ViewMode: {
          NORMAL: string
        }
      }
    }
  }
}

export {}
