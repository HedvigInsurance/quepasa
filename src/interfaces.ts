export interface SegmentAnalyticsJs {
  identify: (
    userId?: string,
    traits?: object,
    options?: object,
    callback?: () => void,
  ) => void
  track: (
    event: string,
    properties?: object,
    options?: object,
    callback?: () => void,
  ) => void
}

enum Ecommerce {
  ProductsSearched = 'Products Searched',
  ProductListViewed = 'Product List Viewed',
  ProductListFiltered = 'Product List Filtered',
  PromotionViewed = 'Promotion Viewed',
  PromotionClicked = 'Promotion Clicked',
  ProductClicked = 'Product Clicked',
  ProductViewed = 'Product Viewed',
  ProductAdded = 'Product Added',
  ProductRemoved = 'Product Removed',
  CartViewed = 'Cart Viewed',
  CheckoutStarted = 'Checkout Started',
  CheckoutStepViewed = 'Checkout Step Viewed',
  CheckoutStepCompleted = 'Checkout Step Completed',
  PaymentInfoEntered = 'Payment Info Entered',
  OrderCompleted = 'Order Completed',
  OrderUpdated = 'Order Updated',
  OrderRefunded = 'Order Refunded',
  OrderCancelled = 'Order Cancelled',
  ProductAddedToWishlist = 'Product Added to Wishlist',
  ProductRemovedFromWishlist = 'Product Removed from Wishlist',
  WishlistProductAddedToCart = 'Wishlist Product Added to Cart',
  ProductShared = 'Product Shared',
  CartShared = 'Cart Shared',
  ProductReviewed = 'Product Reviewed',
}

enum Mobile {
  ApplicationInstalled = 'Application Installed',
  ApplicationOpened = 'Application Opened',
  ApplicationUpdated = 'Application Updated',
  ApplicationBackgrounded = 'Application Backgrounded',
  ApplicationCrashed = 'Application Crashed',
  ApplicationUninstalled = 'Application Uninstalled',
  PushNotificationReceived = 'Push Notification Received',
  PushNotificationBounced = 'Push Notification Bounced',
  InstallAttributed = 'Install Attributed',
  DeepLinkClicked = 'Deep Link Clicked',
  DeepLinkOpened = 'Deep Link Opened',
}

enum AB {
  EventViewed = 'Event Viewed',
}

enum Email {
  EmailBounced = 'Email Bounced',
  EmailDelivered = 'Email Delivered',
  EmailLinkClicked = 'Email Link Clicked',
  EmailMarkedAsSpam = 'Email Marked As Spam',
  EmailOpened = 'Email Opened',
  Unsubscribed = 'Unsubscribed',
}

enum LiveChat {
  LiveChatConversationStarted = 'Live Chat Conversation Started',
  LiveChatConversationEnded = 'Live Chat Conversation Ended',
  LiveChatMessageSent = 'Live Chat Message Sent',
  LiveChatMessageReceived = 'Live Chat Message Received',
}

enum Video {
  VideoPlaybackStarted = 'Video Playback Started',
  VideoPlaybackPaused = 'Video Playback Paused',
  VideoPlaybackInterrupted = 'Video Playback Interrupted',
  VideoPlaybackBufferStarted = 'Video Playback Buffer Started',
  VideoPlaybackBufferCompleted = 'Video Playback Buffer Completed',
  VideoPlaybackSeekStarted = 'Video Playback Seek Started',
  VideoPlaybackSeekCompleted = 'Video Playback Seek Completed',
  VideoPlaybackResumed = 'Video Playback Resumed',
  VideoPlaybackCompleted = 'Video Playback Completed',
  VideoContentStarted = 'Video Content Started',
  VideoContentPlaying = 'Video Content Playing',
  VideoContentCompleted = 'Video Content Completed',
  VideoAdStarted = 'Video Ad Started',
  VideoAdPlaying = 'Video Ad Playing',
  VideoAdCompleted = 'Video Ad Completed',
  VideoQualityUpdated = 'Video Quality Updated',
}

export const SemanticEvents = {
  Ecommerce,
  Mobile,
  AB,
  Email,
  LiveChat,
  Video,
}

export interface Event<TNames extends string = string> {
  name: TNames | Ecommerce | Mobile | AB | Email | LiveChat | Video
  properties?: { [key: string]: any }
  options?: { [key: string]: any }
}

export type EventCreator<TNames extends string = string> = () => Event<TNames>

export interface Identity {
  userId?: string
  traits?: { [key: string]: any }
  options?: { [key: string]: any }
}

export type IdentityCreator = () => Identity
