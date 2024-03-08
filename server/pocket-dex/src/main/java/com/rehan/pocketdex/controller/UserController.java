package com.rehan.pocketdex.controller;

import com.rehan.pocketdex.repositories.UserRepository;
import com.rehan.pocketdex.service.UserDetailService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private final UserDetailService userDetailService;
    public UserController(UserDetailService userDetailService) {
        this.userDetailService=userDetailService;
    }
    @PostMapping("/signup")
    public void addUser(@RequestHeader String username,@RequestHeader String password) {
        userDetailService.addUser(username,password);
    }

//    @GetMapping("/signup")
//    public String signup() {
//        return "signup";
//    }
}
