package softuniBlog.controller;

/**
 * Created by zorry on 26.11.2016 г..
 */

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import softuniBlog.repository.ArticleRepository;
import softuniBlog.repository.UserRepository;

@Controller
public class ArticleController {
    @Autowired
    private ArticleRepository articleRepository;
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/article/create")
    @PreAuthorize("isAuthenticated()")
    public String create(Model model){
        model.addAttribute("view", "article/create");

        return "base-layout";
    }
}
