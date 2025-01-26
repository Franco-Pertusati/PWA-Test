import { Injectable, inject } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PushNotificationService {
  private VAPID_PUBLIC_KEY = 'BFpfcsgYzMCbKXK6IytpxIEEiyG7xAhamStrF_TnoWOSr2VmOmcvRQcBXckW4aWtA_Mqp4BbvspgRkA_EJyScuk';

  swPush = inject(SwPush);
  http = inject(HttpClient);

  constructor() {
    if (this.swPush.isEnabled) {
      this.subscribeToNotifications();
    }
  }

  subscribeToNotifications() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY,
    }).then(subscription => {
      this.http.post('https://pwa-server-opal.vercel.app/suscribe', subscription).subscribe();
    }).catch(err => console.error('Error al suscribirse:', err));
  }

  listenToPushNotifications() {
    this.swPush.messages.subscribe((message) => {
      console.log('Notificación recibida:', message);
    });

    this.swPush.notificationClicks.subscribe(event => {
      console.log('Notificación clickeada:', event);
    });
  }
}
