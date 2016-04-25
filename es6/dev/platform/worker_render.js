import { isPresent, isBlank } from 'angular2/src/facade/lang';
import { PromiseWrapper } from 'angular2/src/facade/async';
import { ApplicationRef, ReflectiveInjector, Provider, getPlatform, createPlatform, assertPlatform } from 'angular2/core';
import { WORKER_RENDER_APPLICATION } from 'angular2/src/platform/worker_render';
import { WORKER_SCRIPT, WORKER_RENDER_PLATFORM, WORKER_RENDER_PLATFORM_MARKER } from 'angular2/src/platform/worker_render_common';
export { WORKER_SCRIPT, WORKER_RENDER_PLATFORM, initializeGenericWorkerRenderer, WORKER_RENDER_APPLICATION_COMMON } from 'angular2/src/platform/worker_render_common';
export { WORKER_RENDER_APPLICATION, WebWorkerInstance } from 'angular2/src/platform/worker_render';
export { ClientMessageBroker, ClientMessageBrokerFactory, FnArg, UiArguments } from '../src/web_workers/shared/client_message_broker';
export { ReceivedMessage, ServiceMessageBroker, ServiceMessageBrokerFactory } from '../src/web_workers/shared/service_message_broker';
export { PRIMITIVE } from '../src/web_workers/shared/serializer';
export * from '../src/web_workers/shared/message_bus';
/**
 * @deprecated Use WORKER_RENDER_APPLICATION
 */
export const WORKER_RENDER_APP = WORKER_RENDER_APPLICATION;
export { WORKER_RENDER_ROUTER } from 'angular2/src/web_workers/ui/router_providers';
export function workerRenderPlatform() {
    if (isBlank(getPlatform())) {
        createPlatform(ReflectiveInjector.resolveAndCreate(WORKER_RENDER_PLATFORM));
    }
    return assertPlatform(WORKER_RENDER_PLATFORM_MARKER);
}
export function bootstrapRender(workerScriptUri, customProviders) {
    var pf = ReflectiveInjector.resolveAndCreate(WORKER_RENDER_PLATFORM);
    var app = ReflectiveInjector.resolveAndCreate([
        WORKER_RENDER_APPLICATION,
        new Provider(WORKER_SCRIPT, { useValue: workerScriptUri }),
        isPresent(customProviders) ? customProviders : []
    ], workerRenderPlatform().injector);
    // Return a promise so that we keep the same semantics as Dart,
    // and we might want to wait for the app side to come up
    // in the future...
    return PromiseWrapper.resolve(app.get(ApplicationRef));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2VyX3JlbmRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtN1lVcXJialkudG1wL2FuZ3VsYXIyL3BsYXRmb3JtL3dvcmtlcl9yZW5kZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBQyxTQUFTLEVBQUUsT0FBTyxFQUFDLE1BQU0sMEJBQTBCO09BQ3BELEVBQUMsY0FBYyxFQUFDLE1BQU0sMkJBQTJCO09BQ2pELEVBQ0wsY0FBYyxFQUVkLGtCQUFrQixFQUNsQixRQUFRLEVBQ1IsV0FBVyxFQUNYLGNBQWMsRUFDZCxjQUFjLEVBQ2YsTUFBTSxlQUFlO09BQ2YsRUFBQyx5QkFBeUIsRUFBQyxNQUFNLHFDQUFxQztPQUN0RSxFQUNMLGFBQWEsRUFDYixzQkFBc0IsRUFDdEIsNkJBQTZCLEVBQzlCLE1BQU0sNENBQTRDO0FBRW5ELFNBQ0UsYUFBYSxFQUNiLHNCQUFzQixFQUN0QiwrQkFBK0IsRUFDL0IsZ0NBQWdDLFFBQzNCLDRDQUE0QyxDQUFDO0FBQ3BELFNBQVEseUJBQXlCLEVBQUUsaUJBQWlCLFFBQU8scUNBQXFDLENBQUM7QUFDakcsU0FDRSxtQkFBbUIsRUFDbkIsMEJBQTBCLEVBQzFCLEtBQUssRUFDTCxXQUFXLFFBQ04saURBQWlELENBQUM7QUFDekQsU0FDRSxlQUFlLEVBQ2Ysb0JBQW9CLEVBQ3BCLDJCQUEyQixRQUN0QixrREFBa0QsQ0FBQztBQUMxRCxTQUFRLFNBQVMsUUFBTyxzQ0FBc0MsQ0FBQztBQUMvRCxjQUFjLHVDQUF1QyxDQUFDO0FBRXREOztHQUVHO0FBQ0gsT0FBTyxNQUFNLGlCQUFpQixHQUFHLHlCQUF5QixDQUFDO0FBQzNELFNBQVEsb0JBQW9CLFFBQU8sOENBQThDLENBQUM7QUFFbEY7SUFDRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsY0FBYyxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBQ0QsTUFBTSxDQUFDLGNBQWMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0FBQ3ZELENBQUM7QUFFRCxnQ0FDSSxlQUF1QixFQUN2QixlQUF3RDtJQUMxRCxJQUFJLEVBQUUsR0FBRyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3JFLElBQUksR0FBRyxHQUFHLGtCQUFrQixDQUFDLGdCQUFnQixDQUN6QztRQUNFLHlCQUF5QjtRQUN6QixJQUFJLFFBQVEsQ0FBQyxhQUFhLEVBQUUsRUFBQyxRQUFRLEVBQUUsZUFBZSxFQUFDLENBQUM7UUFDeEQsU0FBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLGVBQWUsR0FBRyxFQUFFO0tBQ2xELEVBQ0Qsb0JBQW9CLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyQywrREFBK0Q7SUFDL0Qsd0RBQXdEO0lBQ3hELG1CQUFtQjtJQUNuQixNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFDekQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNQcmVzZW50LCBpc0JsYW5rfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2xhbmcnO1xuaW1wb3J0IHtQcm9taXNlV3JhcHBlcn0gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9hc3luYyc7XG5pbXBvcnQge1xuICBBcHBsaWNhdGlvblJlZixcbiAgUGxhdGZvcm1SZWYsXG4gIFJlZmxlY3RpdmVJbmplY3RvcixcbiAgUHJvdmlkZXIsXG4gIGdldFBsYXRmb3JtLFxuICBjcmVhdGVQbGF0Zm9ybSxcbiAgYXNzZXJ0UGxhdGZvcm1cbn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1dPUktFUl9SRU5ERVJfQVBQTElDQVRJT059IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS93b3JrZXJfcmVuZGVyJztcbmltcG9ydCB7XG4gIFdPUktFUl9TQ1JJUFQsXG4gIFdPUktFUl9SRU5ERVJfUExBVEZPUk0sXG4gIFdPUktFUl9SRU5ERVJfUExBVEZPUk1fTUFSS0VSXG59IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS93b3JrZXJfcmVuZGVyX2NvbW1vbic7XG5cbmV4cG9ydCB7XG4gIFdPUktFUl9TQ1JJUFQsXG4gIFdPUktFUl9SRU5ERVJfUExBVEZPUk0sXG4gIGluaXRpYWxpemVHZW5lcmljV29ya2VyUmVuZGVyZXIsXG4gIFdPUktFUl9SRU5ERVJfQVBQTElDQVRJT05fQ09NTU9OXG59IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS93b3JrZXJfcmVuZGVyX2NvbW1vbic7XG5leHBvcnQge1dPUktFUl9SRU5ERVJfQVBQTElDQVRJT04sIFdlYldvcmtlckluc3RhbmNlfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vd29ya2VyX3JlbmRlcic7XG5leHBvcnQge1xuICBDbGllbnRNZXNzYWdlQnJva2VyLFxuICBDbGllbnRNZXNzYWdlQnJva2VyRmFjdG9yeSxcbiAgRm5BcmcsXG4gIFVpQXJndW1lbnRzXG59IGZyb20gJy4uL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvY2xpZW50X21lc3NhZ2VfYnJva2VyJztcbmV4cG9ydCB7XG4gIFJlY2VpdmVkTWVzc2FnZSxcbiAgU2VydmljZU1lc3NhZ2VCcm9rZXIsXG4gIFNlcnZpY2VNZXNzYWdlQnJva2VyRmFjdG9yeVxufSBmcm9tICcuLi9zcmMvd2ViX3dvcmtlcnMvc2hhcmVkL3NlcnZpY2VfbWVzc2FnZV9icm9rZXInO1xuZXhwb3J0IHtQUklNSVRJVkV9IGZyb20gJy4uL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvc2VyaWFsaXplcic7XG5leHBvcnQgKiBmcm9tICcuLi9zcmMvd2ViX3dvcmtlcnMvc2hhcmVkL21lc3NhZ2VfYnVzJztcblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBVc2UgV09SS0VSX1JFTkRFUl9BUFBMSUNBVElPTlxuICovXG5leHBvcnQgY29uc3QgV09SS0VSX1JFTkRFUl9BUFAgPSBXT1JLRVJfUkVOREVSX0FQUExJQ0FUSU9OO1xuZXhwb3J0IHtXT1JLRVJfUkVOREVSX1JPVVRFUn0gZnJvbSAnYW5ndWxhcjIvc3JjL3dlYl93b3JrZXJzL3VpL3JvdXRlcl9wcm92aWRlcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gd29ya2VyUmVuZGVyUGxhdGZvcm0oKTogUGxhdGZvcm1SZWYge1xuICBpZiAoaXNCbGFuayhnZXRQbGF0Zm9ybSgpKSkge1xuICAgIGNyZWF0ZVBsYXRmb3JtKFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlQW5kQ3JlYXRlKFdPUktFUl9SRU5ERVJfUExBVEZPUk0pKTtcbiAgfVxuICByZXR1cm4gYXNzZXJ0UGxhdGZvcm0oV09SS0VSX1JFTkRFUl9QTEFURk9STV9NQVJLRVIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm9vdHN0cmFwUmVuZGVyKFxuICAgIHdvcmtlclNjcmlwdFVyaTogc3RyaW5nLFxuICAgIGN1c3RvbVByb3ZpZGVycz86IEFycmF5PGFueSAvKlR5cGUgfCBQcm92aWRlciB8IGFueVtdKi8+KTogUHJvbWlzZTxBcHBsaWNhdGlvblJlZj4ge1xuICB2YXIgcGYgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZUFuZENyZWF0ZShXT1JLRVJfUkVOREVSX1BMQVRGT1JNKTtcbiAgdmFyIGFwcCA9IFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlQW5kQ3JlYXRlKFxuICAgICAgW1xuICAgICAgICBXT1JLRVJfUkVOREVSX0FQUExJQ0FUSU9OLFxuICAgICAgICBuZXcgUHJvdmlkZXIoV09SS0VSX1NDUklQVCwge3VzZVZhbHVlOiB3b3JrZXJTY3JpcHRVcml9KSxcbiAgICAgICAgaXNQcmVzZW50KGN1c3RvbVByb3ZpZGVycykgPyBjdXN0b21Qcm92aWRlcnMgOiBbXVxuICAgICAgXSxcbiAgICAgIHdvcmtlclJlbmRlclBsYXRmb3JtKCkuaW5qZWN0b3IpO1xuICAvLyBSZXR1cm4gYSBwcm9taXNlIHNvIHRoYXQgd2Uga2VlcCB0aGUgc2FtZSBzZW1hbnRpY3MgYXMgRGFydCxcbiAgLy8gYW5kIHdlIG1pZ2h0IHdhbnQgdG8gd2FpdCBmb3IgdGhlIGFwcCBzaWRlIHRvIGNvbWUgdXBcbiAgLy8gaW4gdGhlIGZ1dHVyZS4uLlxuICByZXR1cm4gUHJvbWlzZVdyYXBwZXIucmVzb2x2ZShhcHAuZ2V0KEFwcGxpY2F0aW9uUmVmKSk7XG59XG4iXX0=