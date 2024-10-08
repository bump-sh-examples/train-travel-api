/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as BumpshApi from "../../api/index";
import * as core from "../../core";
export declare const Trip: core.serialization.ObjectSchema<serializers.Trip.Raw, BumpshApi.Trip>;
export declare namespace Trip {
    interface Raw {
        id?: string | null;
        origin?: string | null;
        destination?: string | null;
        departure_time?: string | null;
        arrival_time?: string | null;
        operator?: string | null;
        price?: number | null;
        bicycles_allowed?: boolean | null;
        dogs_allowed?: boolean | null;
    }
}
