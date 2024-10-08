/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as BumpshApi from "../../../index";
import express from "express";
export interface TripsServiceMethods {
    getTrips(req: express.Request<never, BumpshApi.GetTripsResponse, never, {
        origin: string;
        destination: string;
        date: Date;
        bicycles?: boolean;
        dogs?: boolean;
    }>, res: {
        send: (responseBody: BumpshApi.GetTripsResponse) => Promise<void>;
        cookie: (cookie: string, value: string, options?: express.CookieOptions) => void;
        locals: any;
    }, next: express.NextFunction): void | Promise<void>;
}
/**
 * Timetables and routes for train trips between stations, including pricing
 * and availability.
 *
 */
export declare class TripsService {
    private readonly methods;
    private router;
    constructor(methods: TripsServiceMethods, middleware?: express.RequestHandler[]);
    addMiddleware(handler: express.RequestHandler): this;
    toRouter(): express.Router;
}
