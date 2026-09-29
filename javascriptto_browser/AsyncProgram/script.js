function simulateAsyncOperation() {

```
return new Promise(function(resolve) {

    setTimeout(function() {

        resolve("Asynchronous operation completed successfully!");

    }, 2000);

});
```

}

async function performAsyncOperation() {

```
try {

    const result = await simulateAsyncOperation();

    console.log(result);

    document.getElementById("output").innerHTML = result;

}

catch (error) {

    console.log("An error occurred: " + error);

    document.getElementById("output").innerHTML =
        "An error occurred: " + error;

}

finally {

    console.log("Async operation completed.");

}
```

}
