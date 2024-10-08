/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as BumpshApi from "../../../index";
import express from "express";
export interface StationsServiceMethods {
    getStations(req: express.Request<never, BumpshApi.GetStationsResponse, never, never>, res: {
        send: (responseBody: BumpshApi.GetStationsResponse) => Promise<void>;
        cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
        locals: any;
    }, next: express.NextFunction): void | Promise<void>;
}
/**
 * Find and filter train stations across Europe, including their location
 * and local timezone.
 *
 */
export declare class StationsService {
    private readonly methods;
    private router;
    constructor(methods: StationsServiceMethods, middleware?: express.RequestHandler[]);
    addMiddleware(handler: express.RequestHandler): this;
    toRouter(): express.Router;
}
