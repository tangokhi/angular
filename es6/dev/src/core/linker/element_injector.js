import { CONST_EXPR } from 'angular2/src/facade/lang';
import { Injector, THROW_IF_NOT_FOUND } from 'angular2/src/core/di/injector';
const _UNDEFINED = CONST_EXPR(new Object());
export class ElementInjector extends Injector {
    constructor(_view, _nodeIndex) {
        super();
        this._view = _view;
        this._nodeIndex = _nodeIndex;
    }
    get(token, notFoundValue = THROW_IF_NOT_FOUND) {
        var result = _UNDEFINED;
        if (result === _UNDEFINED) {
            result = this._view.injectorGet(token, this._nodeIndex, _UNDEFINED);
        }
        if (result === _UNDEFINED) {
            result = this._view.parentInjector.get(token, notFoundValue);
        }
        return result;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlbWVudF9pbmplY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtN1lVcXJialkudG1wL2FuZ3VsYXIyL3NyYy9jb3JlL2xpbmtlci9lbGVtZW50X2luamVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEVBQXFCLFVBQVUsRUFBQyxNQUFNLDBCQUEwQjtPQUNoRSxFQUFDLFFBQVEsRUFBRSxrQkFBa0IsRUFBQyxNQUFNLCtCQUErQjtBQUcxRSxNQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBRTVDLHFDQUFxQyxRQUFRO0lBQzNDLFlBQW9CLEtBQW1CLEVBQVUsVUFBa0I7UUFBSSxPQUFPLENBQUM7UUFBM0QsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUFVLGVBQVUsR0FBVixVQUFVLENBQVE7SUFBYSxDQUFDO0lBRWpGLEdBQUcsQ0FBQyxLQUFVLEVBQUUsYUFBYSxHQUFRLGtCQUFrQjtRQUNyRCxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUM7UUFDeEIsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDMUIsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztZQUMxQixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQztRQUMvRCxDQUFDO1FBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNoQixDQUFDO0FBQ0gsQ0FBQztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc0JsYW5rLCBzdHJpbmdpZnksIENPTlNUX0VYUFJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0luamVjdG9yLCBUSFJPV19JRl9OT1RfRk9VTkR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2RpL2luamVjdG9yJztcbmltcG9ydCB7QXBwVmlld30gZnJvbSAnLi92aWV3JztcblxuY29uc3QgX1VOREVGSU5FRCA9IENPTlNUX0VYUFIobmV3IE9iamVjdCgpKTtcblxuZXhwb3J0IGNsYXNzIEVsZW1lbnRJbmplY3RvciBleHRlbmRzIEluamVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfdmlldzogQXBwVmlldzxhbnk+LCBwcml2YXRlIF9ub2RlSW5kZXg6IG51bWJlcikgeyBzdXBlcigpOyB9XG5cbiAgZ2V0KHRva2VuOiBhbnksIG5vdEZvdW5kVmFsdWU6IGFueSA9IFRIUk9XX0lGX05PVF9GT1VORCk6IGFueSB7XG4gICAgdmFyIHJlc3VsdCA9IF9VTkRFRklORUQ7XG4gICAgaWYgKHJlc3VsdCA9PT0gX1VOREVGSU5FRCkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5fdmlldy5pbmplY3RvckdldCh0b2tlbiwgdGhpcy5fbm9kZUluZGV4LCBfVU5ERUZJTkVEKTtcbiAgICB9XG4gICAgaWYgKHJlc3VsdCA9PT0gX1VOREVGSU5FRCkge1xuICAgICAgcmVzdWx0ID0gdGhpcy5fdmlldy5wYXJlbnRJbmplY3Rvci5nZXQodG9rZW4sIG5vdEZvdW5kVmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iXX0=