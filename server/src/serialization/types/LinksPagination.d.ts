/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as BumpshApi from "../../api/index";
import * as core from "../../core";
export declare const LinksPagination: core.serialization.ObjectSchema<serializers.LinksPagination.Raw, BumpshApi.LinksPagination>;
export declare namespace LinksPagination {
    interface Raw {
        next?: string | null;
        prev?: string | null;
    }
}
