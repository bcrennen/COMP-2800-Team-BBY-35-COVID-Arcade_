using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemySpawnerScript : MonoBehaviour { 

    public GameObject enemy;
    float randX;
    float randY;
    Vector2 whereToSpawn;
    public float spawnrate = 2f;
    float nextSpawn = 0.0f;

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Time.time > nextSpawn)
        {
            nextSpawn = Time.time + spawnrate;
            randY = Random.Range(-4, 4f);
            whereToSpawn = new Vector2(12, randY);
            Instantiate(enemy, whereToSpawn, Quaternion.identity);
        }

    }



}
