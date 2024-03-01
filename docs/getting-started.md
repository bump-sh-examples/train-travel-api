Travelling by train across Europe usually requires a train ticket.

With this API you will be able to search, book and pay for a train
ticket and enjoy watching the landscapes by the window.

Below is the set of API calls you will need to do to get your ticket.

| Description | API | Repeat?  |
|-----------------------------------------------:|:-----------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------|
| Search for train stations | [`GET /stations`](https://bump.sh/bump-examples/doc/train-travel-api/operation/operation-get-stations) | Call this operation as many times as needed to find your origin and destination train stations |
| Lookup train schedules and ticket availability | [`GET /trips`](https://bump.sh/bump-examples/doc/train-travel-api/operation/operation-get-trips) | As many calls as necessary, you will provide both the origin and destination station IDs and a traveling date |
| Make your booking | [`POST /bookings`](https://bump.sh/bump-examples/doc/train-travel-api/operation/operation-create-booking) | Usually one booking is enough. But if you want to organize your next holidays you may book as many tickets as you like |
| Issue your ticket by paying | [`POST /bookings/{bookingId}/payment`](https://bump.sh/bump-examples/doc/train-travel-api/operation/operation-create-booking-payment) | One payment per booking is enough to receive your ticket |

Happy traveling!

> info
> You can optionally [subscribe to a webhook](https://bump.sh/bump-examples/doc/train-travel-api/operation/operation-new-booking) to receive updates about your bookings.

