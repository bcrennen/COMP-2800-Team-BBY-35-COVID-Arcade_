using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
public class HoldButtonShoot : MonoBehaviour, IPointerDownHandler, IPointerUpHandler
{

    public PlayerController pca;
    bool ispressed = false;

    void Update()
    {

        if (!ispressed)
            return;
        pca.Shoot();
        Debug.Log("Pressed");
    }

    public void OnPointerDown(PointerEventData eventData)
    {
        ispressed = true;
    }

    public void OnPointerUp(PointerEventData eventData)
    {
        Debug.Log("Unpressed");
        ispressed = false;
    }
}
