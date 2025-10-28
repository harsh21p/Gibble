//
//  AppDelegate.m
//  Gibble
//
//  Created by BODHANKAR Gajanan M (Gajanan Mukesh) on 18/10/25.
//
#import "Orientation.h"
#import <Foundation/Foundation.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{

- (UIInterfaceOrientationMask)application:(UIApplication *)application supportedInterfaceOrientationsForWindow:(UIWindow *)window {
  return [Orientation getOrientation];
}

@end

