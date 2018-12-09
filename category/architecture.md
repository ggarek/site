---
title: Architecture
---

# Architecture

## Organization-wise

### [Airbnb Architecture](/airbnb-architecture.html)

Airbnb is a website that operates an online marketplace and hospitality service for people to lease or rent short-term lodging. The challenges for the engineering team includes high-availability, quick-scaling, etc.

## Connection-wise

### [Layered Architecture](/layered-architecture.html)

The layered architecture has several other names, such as onion architecture, the clean architecture, etc. The basic theory is, you organize the components layer by layer in which only the upstream layer can make calls to the downstream layers.

Most systems are designed in the layered architecture.

## Component-wise

### [Back-pressure](/back-pressure.html)

Producer-consumer model is very helpful to decouple the system components. However, the situation is quite often in which producer produces jobs more rapidly than consumers can consume them. It's a challenge to manage a large number of unconsumed jobs.

Applying back-pressure is one effective technique to handle high-load. We tend to handle already accepted requests and transactions first, and reject those can't be handled. If you have many components and the producing-consuming speed might mismatch, consider back-pressure.

### [Container](/container.html)

A container is merely an OS process, except that it's being isolated, secured, and limited. All values added to the process make the container the dominant technology in the cloud era.

### [Circuit Breaker](/circuit-breaker.html)

Performance issue on upstream service often leads to downstream application crash. By applying with Circuit Breaker on downstream application side, we can prevent the entire system from cascading failure.  The state machine is in the core algorithm of Circuit Breaker. You can choose one of the listed library above and apply one of the listed API style above to improve your service.

### [Data Serialization](/data-serialization.html)

* JSON is usually your first choice. It's simple, human readable, and has most widespread support.
* Use MsgPack instead of JSON if performance is an issue.
* Use Protobuf if type check and schema check is essential. gRPC is recommended as an RPC framework based on Protobuf.
    * Use Thrift if you're developing RPC services and don't like Protobuf syntax.
* Use TOML if you're serializing some config files.
* Use CSV if you're serializing data to non-technical people.
    * Use INI if you want something simpler.
    * Use YAML if you want something more complex.
* Use language built-in serialization functions or methods if the use case is only limited in a single language, and you don't care security that much (not good). 

### [Load Balance](/load-balance.html)

Load balancing is fundamental way to build a large distributed system, and hence knowing it well is important. To build a reliable system, a mature load balancer hardware or software is essential. If you have a lot of money, then buy a load balancing hardware. Otherwise, a load balancing software is recommended.

### [In-Memory Database](/in-memory-database.html)

In-memory databases are faster than on-disk databases because disk access is slower than memory access. Meanwhile, to overcome the drawback of data losing from crashing, we have to introduce strategies like snapshotting, transaction logging, consistent hashing, high availability. Despite of all the complexity introduced, people love in-memory databases when response time is really a criterion since it's probably the best solution. And in most case, Redis could be the first choice.

### [Job Queue](/job-queue.html)

Job queue is an essential component to extend request-response model for handling time-consuming jobs. Choose a Job Queue framework that has API and features you like, and make sure that you have solutions to overcome the disadvantages.

### [Load](/load.html)

Load is a set of numbers that describe performance of system. The meaning of numbers depends on what system is running.

If you are maintaining a production system, the high load averages or percentiles are things to worry about. When they're high, either identify the bottleneck or simply assign more servers or instances.

### [Periodic Scheduler](/periodic-scheduler.html)

Using crontab is the easiest way to schedule periodic jobs. The limitation is that you can’t control the resource usage and it’s less flexible. To run periodic jobs in a fine-controlled environment, you might want to choose Kubernetes CronJob. To leverage the power of periodic scheduler, you might want to integrate a scheduler library into your application.

### Raft

* [Raft and Unreliable Network](/raft-and-unreliable-network.html)

* [Raft and The Nature of Time](/raft-and-the-nature-of-time.html)

### [Sharding](/sharding.html)

Sharding is a type of database partitioning technique that manages the subsets of data on several server hosts. It solves SPOF problem and single server resource limitation but introduces sharding logic to be implemented. Data sharding can be simple or complex depending on the sharding strategy.

### [Time-consuming Jobs](/time-consuming-jobs.html)

It's impossible to achieve both goals without changing the execution model, to keep the system responsive all the time and to complete the time-consuming jobs.

There are at least three solutions: slicing jobs, pre-executing jobs, post-executing jobs.

## Software-wise

### [The Architecture of SQLAlchemy](/the-architecture-of-sqlalchemy.html)

SQLAlchemy might be the best ORM software in the Python world regardless of your taste. Though you need to learn several fundamental concepts, it's still easy to use. If you're writing a Web application and needs to manipulate data with databases, SQLAlchemy is always a strong candidate.

### [The Architecture of APScheduler](/apscheduler.html)

APScheduler is a job scheduling framework that executes code either one-off or periodically. People often integrate it into an existing Python application for running interval jobs.