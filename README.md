# mapbox_example
Example specifying Mapbox repo for artifacts


To run this you need to add two tokens to the code, that you setup in MapBox

1. In App_Resources\Android\before-plugins.gradle  you need to add a token which has the DOWNLOADS:READ Scope, you will need a different token from the default for this.
1. In src\app\item\items.component.html you will need to specify the "default public token" as the accessToken ( or another customised token )
