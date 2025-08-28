Here is the version with just the steps and the necessary run commands:

## **For Windows**

### Step 1: Stop MongoDB Service 

```bash
net stop MongoDB
```

### Step 2: Edit `mongod.cfg` File (C:\Program Files\MongoDB\Server\<your-version>\bin\mongod.cfg)

```bash
  replication:
    replSetName: "rs0" 
```

### Step 3: Start MongoDB Service 

```bash
net start MongoDB 
```

### Step 4: Initialize Replica Set 

```bash
mongosh
``` 

### Step 5: Run this in mongo Shell

```bash
rs.initiate() 
```

## When Data Cahange to Get Old Data and New Data Together in Change Stream (Advance and Optional)

### Step 6: Initialize Replica Set Again
```bash
mongoose
```


### Step 7: Select Database

```bash
Use “DB_NAME”
```

### Step 7: Run changeStreamPreAndPostImages Engable Command

```bash
db.runCommand({
  collMod: “COLLECTION_NAME”,
  changeStreamPreAndPostImages: { enabled: true }
})
```

Output —>> 
{
  ok: 1,
  '$clusterTime': {
    clusterTime: Timestamp({ t: 1756292772, i: 1 }),
    signature: {
      hash: Binary.createFromBase64('AAAAAAAAAAAAAAAAAAAAAAAAAAA=', 0),
      keyId: Long('0')
    }
  },
  operationTime: Timestamp({ t: 1756292772, i: 1 })
}

### Step 7: Now Go To Code Editor (VS Code) and Write the Code

```bash
const changeStream = Collection.watch([], {
  fullDocument: "updateLookup", // to get the full document after update
  fullDocumentBeforeChange: "required", // to get the full document before update
});

changeStream.on("change", (change) => {
  if (change.operationType === "update") {
    console.log("Old document:", change);
    console.log("Old document:", change.fullDocumentBeforeChange);
    console.log("New document:", change.fullDocument);
  } 
});
```



## **For Linux**

### Step 1: Stop MongoDB Service 

```bash
sudo systemctl stop mongod 
```

### Step 2: Edit `mongod.cfg` File (/etc/mongod.conf)

```bash
replication:
    replSetName: "rs0"
```

### Step 3: Start MongoDB Service 

```bash
sudo systemctl start mongod 
```

### Step 4: Initialize Replica Set 

```bash
mongosh
```

### Step 5: Run this in mongo Shell

```bash
rs.initiate() 
```

## **For macOS**

### Step 1: Stop MongoDB Service 

```bash
brew services stop mongodb
```

### Step 2: Edit `mongod.cfg` File (/usr/local/etc/mongod.conf or /opt/homebrew/etc/mongod.conf)

```bash
replication:
  replSetName: "rs0"
```

### Step 3: Start MongoDB Service 

```bash
brew services start mongodb
```

### Step 4: Initialize Replica Set 

```bash
mongosh 
```

### Step 5: Run this in mongo Shell
```bash
rs.initiate() 
```

## **For Docker**

### Step 1: Install Docker In Your OS

### Step 2: Run Mongodb Container With This Command

```bash
docker run -d \
  --name mongodb \
  -p 27017:27017 \
  -v /var/lib/mongodb:/data/db \
  mongo \
  mongod --replSet rs0 --bind_ip_all
```

### Step 3: Enter Mongodb Docker Container

```bash
docker exec -it mongodb /bin/bash
```

### Step 4: Enter Mongo Shell

```bash
mongosh
```

### Step 5: Run This In Mongo Shell

```bash
rs.initiate()
```
 
