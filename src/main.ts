import { platformNativeScript, runNativeScriptAngularApp } from '@nativescript/angular';

import { AppModule } from './app/app.module';
import { registerElement } from '@nativescript/angular';
registerElement("Mapbox", () => require("@nativescript-community/ui-mapbox").MapboxView);
runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});

