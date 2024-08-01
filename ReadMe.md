# Demo Mongo DB & NodeJs

You'll be building the frame for a Referral 
service in Mongo.

Refrain from completing the highlighted section. 
You don't have to complete that. We're more 
concerned with you completing 
the DB structure and 1 route.

## How to run the project

```bash
make install
```

#### Call url
```bash
http://localhost:3000/api/v1/referral?referralCode=ref001
```

### if you don't have wget - run before calling the url
```bash
http://localhost:3000/api/v1/install
```

### Test of PUT
```bash
 curl -X PUT -H "Content-Type: application/json" -d '{"referralCode": "ref001", "status": "Canceled", "reward": "17"}' http://localhost:3000/api/v1/referral
```