/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as BumpshApi from "../../api/index";
import * as core from "../../core";
export declare const WrapperCollection: core.serialization.ObjectSchema<serializers.WrapperCollection.Raw, BumpshApi.WrapperCollection>;
export declare namespace WrapperCollection {
    interface Raw {
        data?: Record<string, unknown>[] | null;
        links?: Record<string, unknown> | null;
    }
}
