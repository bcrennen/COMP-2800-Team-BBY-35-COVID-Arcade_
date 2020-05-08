using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BulletScript : MonoBehaviour
{
    public float speed = 5f;
    public float deactivate_Timer = 3f;

    [HideInInspector]
    public bool is_EnemyBullet = false;



    // Start is called before the first frame update
    void Start()
    {
        if(is_EnemyBullet)
        {
            speed *= -2f;
        }
        Invoke("DestroyBullet", 4.2f);
    }

    // Update is called once per frame
    void Update()
    {
        Move();
    }

    void Move()
    {
        Vector3 temp = transform.position;
        temp.x += speed * Time.deltaTime;
        transform.position = temp;
    }

    void DestroyBullet()
    {
        gameObject.SetActive(false);
    }

    private void OnTriggerEnter2D(Collider2D target)
    {
        if (!is_EnemyBullet)
        {
            if (target.tag == "Bullet" || target.tag == "Enemy" || target.tag == "PlayerBullet")
            {
                gameObject.SetActive(false);
            }
        }
        if (is_EnemyBullet)
        {
            if (target.tag == "Bullet" || target.tag == "PlayerBullet")
            {
                gameObject.SetActive(false);
            }
        }
    }


}
