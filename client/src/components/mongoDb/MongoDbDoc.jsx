// MongoDbDoc.jsx
import React, {useEffect, useState} from "react";
import { Button, Card } from "react-bootstrap";
import {getApi} from "../helper/helper.js";
const mongoDbData = [
    {
        id: 1,
        page: "mongoDbPageData",
        title: "Insert a Single Document",
        description: "Insert one document into a collection using insertOne.",
        useCase: "Adding a new user record in a users collection.",
        sampleCode: `await db.collection("users").insertOne({
  name: "Alice",
  email: "alice@example.com",
  age: 25
});`
    },
    {
        id: 2,
        page: "mongoDbPageData",
        title: "Insert Multiple Documents",
        description: "Insert many documents at once with insertMany().",
        useCase: "Batch insert product records into a catalog.",
        sampleCode: `await db.collection("products").insertMany([
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 }
]);`
    },
    {
        id: 3,
        page: "mongoDbPageData",
        title: "Find Documents",
        description: "Retrieve documents with the find() method.",
        useCase: "Fetch all users above 18 years old.",
        sampleCode: `const users = await db.collection("users")
  .find({ age: { $gte: 18 } })
  .toArray();`
    },
    {
        id: 4,
        page: "mongoDbPageData",
        title: "Find One Document",
        description: "Get a single matching document with findOne().",
        useCase: "Find a user by email.",
        sampleCode: `const user = await db.collection("users")
  .findOne({ email: "alice@example.com" });`
    },
    {
        id: 5,
        page: "mongoDbPageData",
        title: "Update One Document",
        description: "Modify a single document using updateOne().",
        useCase: "Update a user's age.",
        sampleCode: `await db.collection("users").updateOne(
  { email: "alice@example.com" },
  { $set: { age: 26 } }
);`
    },
    {
        id: 6,
        page: "mongoDbPageData",
        title: "Update Multiple Documents",
        description: "Update many documents that match a condition.",
        useCase: "Increase price of all products by 10%.",
        sampleCode: `await db.collection("products").updateMany(
  {},
  { $mul: { price: 1.1 } }
);`
    },
    {
        id: 7,
        page: "mongoDbPageData",
        title: "Replace a Document",
        description: "Completely replace a document with replaceOne().",
        useCase: "Overwrite a user's document with new data.",
        sampleCode: `await db.collection("users").replaceOne(
  { email: "alice@example.com" },
  { name: "Alice", age: 30, email: "alice@example.com" }
);`
    },
    {
        id: 8,
        page: "mongoDbPageData",
        title: "Delete One Document",
        description: "Remove a single document using deleteOne().",
        useCase: "Delete a user by ID.",
        sampleCode: `await db.collection("users").deleteOne({ _id: ObjectId("64d...") });`
    },
    {
        id: 9,
        page: "mongoDbPageData",
        title: "Delete Multiple Documents",
        description: "Remove multiple documents with deleteMany().",
        useCase: "Delete all inactive users.",
        sampleCode: `await db.collection("users").deleteMany({ status: "inactive" });`
    },
    {
        id: 10,
        page: "mongoDbPageData",
        title: "Create Index",
        description: "Improve query performance with createIndex().",
        useCase: "Create an index on email for fast lookups.",
        sampleCode: `await db.collection("users").createIndex({ email: 1 }, { unique: true });`
    },
    {
        id: 11,
        page: "mongoDbPageData",
        title: "Aggregation - Grouping",
        description: "Group documents with the aggregation pipeline.",
        useCase: "Get total sales per product.",
        sampleCode: `await db.collection("orders").aggregate([
  { $group: { _id: "$productId", totalSales: { $sum: "$amount" } } }
]).toArray();`
    },
    {
        id: 12,
        page: "mongoDbPageData",
        title: "Aggregation - Lookup",
        description: "Perform joins with $lookup.",
        useCase: "Get user details along with their orders.",
        sampleCode: `await db.collection("orders").aggregate([
  {
    $lookup: {
      from: "users",
      localField: "userId",
      foreignField: "_id",
      as: "userDetails"
    }
  }
]).toArray();`
    },
    {
        id: 13,
        page: "mongoDbPageData",
        title: "Aggregation - Match & Sort",
        description: "Filter and sort inside an aggregation.",
        useCase: "Find top 5 expensive products.",
        sampleCode: `await db.collection("products").aggregate([
  { $match: { price: { $gt: 500 } } },
  { $sort: { price: -1 } },
  { $limit: 5 }
]).toArray();`
    },
    {
        id: 14,
        page: "mongoDbPageData",
        title: "Transactions",
        description: "Execute ACID transactions with session.startTransaction().",
        useCase: "Transfer money between bank accounts.",
        sampleCode: `const session = client.startSession();
session.startTransaction();
try {
  await db.collection("accounts").updateOne(
    { name: "Alice" }, { $inc: { balance: -100 } }, { session }
  );
  await db.collection("accounts").updateOne(
    { name: "Bob" }, { $inc: { balance: 100 } }, { session }
  );
  await session.commitTransaction();
} catch (e) {
  await session.abortTransaction();
}
session.endSession();`
    },
    {
        id: 15,
        page: "mongoDbPageData",
        title: "Schema Validation",
        description: "Enforce document structure with validation rules.",
        useCase: "Ensure users must have a name and age.",
        sampleCode: `await db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "age"],
      properties: {
        name: { bsonType: "string" },
        age: { bsonType: "int", minimum: 0 }
      }
    }
  }
});`
    },
    {
        id: 16,
        page: "mongoDbPageData",
        title: "Text Search",
        description: "Enable full-text search with text indexes.",
        useCase: "Search blog posts by keywords.",
        sampleCode: `await db.collection("posts").createIndex({ content: "text" });
const results = await db.collection("posts")
  .find({ $text: { $search: "mongodb aggregation" } })
  .toArray();`
    },
    {
        id: 17,
        page: "mongoDbPageData",
        title: "Geospatial Queries",
        description: "Query locations with geospatial indexes.",
        useCase: "Find nearby restaurants within 5km.",
        sampleCode: `await db.collection("restaurants").createIndex({ location: "2dsphere" });
const nearby = await db.collection("restaurants").find({
  location: {
    $near: {
      $geometry: { type: "Point", coordinates: [77.5946, 12.9716] },
      $maxDistance: 5000
    }
  }
}).toArray();`
    },
    {
        id: 18,
        page: "mongoDbPageData",
        title: "Change Streams",
        description: "Listen to real-time updates with watch().",
        useCase: "Trigger notifications when new orders are placed.",
        sampleCode: `const changeStream = db.collection("orders").watch();
changeStream.on("change", (next) => {
  console.log("Order changed:", next);
});`
    },
    {
        id: 19,
        page: "mongoDbPageData",
        title: "Bulk Write",
        description: "Execute multiple write operations efficiently.",
        useCase: "Batch update user scores.",
        sampleCode: `await db.collection("users").bulkWrite([
  { updateOne: { filter: { name: "Alice" }, update: { $set: { score: 95 } } } },
  { updateOne: { filter: { name: "Bob" }, update: { $set: { score: 88 } } } }
]);`
    },
    {
        id: 20,
        page: "mongoDbPageData",
        title: "Explain Query",
        description: "Analyze query performance with explain().",
        useCase: "Check why a query is slow.",
        sampleCode: `const explain = await db.collection("users")
  .find({ email: "alice@example.com" })
  .explain("executionStats");
console.log(explain);`
    }
];


const MongoDbDoc = () => {
    const [mongoDbData, setMongoDbData] = useState([]);

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const response = await getApi("mongoDb");
                setMongoDbData(response.data.data.sort((a, b) => a.id - b.id) || []);
            } catch (error) {
                setMongoDbData([]);
                console.error("Error fetching topics:", error);
            }
        };
        fetchTopics();
    }, []);
    const [copiedCode, setCopiedCode] = useState(null);
    const [search, setSearch] = useState("");

    const handleCopy = async (code, key) => {
        try {
            await navigator.clipboard.writeText(code);
            setCopiedCode(key);
            setTimeout(() => setCopiedCode(null), 2000);
        } catch (err) {
            console.error("Copy failed:", err);
        }
    };

    // filter logic for search
    const filteredData = mongoDbData.filter(
        (item) =>
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.description.toLowerCase().includes(search.toLowerCase()) ||
            item.useCase.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container my-4">
            <div className="row g-4">
                {/* Left Side - Intro */}
                <div className="col-md-6">
                    <h2 className="text-success fw-bold mb-3">🍃 MongoDB Documentation</h2>

                    <h6>📖 What is MongoDB?</h6>
                    <p>
                        MongoDB is a <b>NoSQL database</b> designed for scalability,
                        flexibility, and high performance. It stores data in{" "}
                        <b>JSON-like documents</b> with optional schemas.
                    </p>

                    <ul className="list-unstyled">
                        <li>✅ Flexible schema-less design</li>
                        <li>✅ High availability with replication</li>
                        <li>✅ Horizontal scaling with sharding</li>
                        <li>✅ Powerful query and aggregation framework</li>
                    </ul>
                </div>

                {/* Right Side - Installation */}
                <div className="col-md-6">
                    <h6>⚙️ Installation & Setup</h6>
                    <p>
                        Install MongoDB locally or use <b>Atlas (cloud)</b>. Example with
                        Node.js:
                    </p>

                    <div className="position-relative mb-3">
            <pre className="bg-dark text-white p-3 rounded">
              <code>npm install mongodb</code>
            </pre>
                    </div>

                    <div className="position-relative mb-3">
            <pre className="bg-dark text-white p-3 rounded">
              <code>{`import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");
await client.connect();
const db = client.db("testDB");`}</code>
            </pre>
                    </div>
                </div>
            </div>

            {/* Searchbox */}
            <div className="row mt-5 mb-3">
                <div className="col-12">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="🔍 Search MongoDB methods..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>

            {/* Advanced Usage */}
            <div className="row">
                <div className="col-12">
                    <h4 className="fw-bold">🧩 MongoDB Methods & Examples</h4>
                    <p>
                        Below are advanced MongoDB commands with use cases and code
                        snippets.
                    </p>

                    {filteredData.map((item) => (
                        <Card key={item.id} className="mb-4 shadow-sm">
                            <Card.Body>
                                <h5>{item.title}</h5>
                                <p className="text-muted">{item.description}</p>
                                <p>
                                    <b>Use Case:</b> {item.useCase}
                                </p>

                                {/* Sample Code with Copy */}
                                <div className="position-relative mt-3">
                  <pre className="bg-dark text-white p-3 rounded">
                    <code>{item.sampleCode}</code>
                  </pre>
                                    <Button
                                        className="btn btn-outline-light btn-sm position-absolute top-0 end-0 m-2"
                                        onClick={() => handleCopy(item.sampleCode, item.id)}
                                    >
                                        {copiedCode === item.id ? "✔ Copied" : "📋 Copy"}
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MongoDbDoc;
