import UIKit
import React
import React_RCTAppDelegate
import ReactAppDependencyProvider
import RNCKakaoUser
import NaverThirdPartyLogin

@main
class AppDelegate: RCTAppDelegate {
  override func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
    self.moduleName = "withT"
    self.dependencyProvider = RCTAppDependencyProvider()

    // You can add your custom initial props in the dictionary below.
    // They will be passed down to the ViewController used by React Native.
    self.initialProps = [:]

    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }

  override func sourceURL(for bridge: RCTBridge) -> URL? {
    self.bundleURL()
  }

  override func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool {
    let naverScheme = RNCConfig.env(for: "NAVER_SCHEME")
    
    if (RNCKakaoUserUtil.isKakaoTalkLoginUrl(url)) {
      return RNCKakaoUserUtil.handleOpen(url);
    }

    if url.scheme == naverScheme {
      return NaverThirdPartyLoginConnection.getSharedInstance().application(app, open: url, options: options)
    }

    return false
  }

  override func bundleURL() -> URL? {
#if DEBUG
    RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
#else
    Bundle.main.url(forResource: "main", withExtension: "jsbundle")
#endif
  }
}
